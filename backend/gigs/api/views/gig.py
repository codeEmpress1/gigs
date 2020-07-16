from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from ..models.gig import Gig
from ..serializers.gig import GigSerializer


class CreateGig(APIView):
    
    def post(self, request):
        # data = request.data
        serializer = GigSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"payload": serializer.data, "message": "Gig successfully created"}, status=status.HTTP_201_CREATED)
        return Response({"message": "check your input fields"}, status=status.HTTP_400_BAD_REQUEST)

class GigList(APIView):
    def get(self, request):
        try:
            queryset = Gig.objects.all()
            serializer = GigSerializer(queryset, many=True)
            return Response({"payload": serializer.data, "message": "fetch successful"})
        except:
            return Response({"error": "Cannot fetch gigs"})

class GigDetail(APIView):
    def get_gig(self, gig_id):
        try:
            return get_object_or_404(Gig, gig_id=gig_id)
        except Gig.DoesNotExist:
            return False

    def put(self, request, gig_id):
        gig = self.get_gig(gig_id)
        if gig:
            serializer = GigSerializer(gig, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response({"message": "Gig successfully updated", "payload": serializer.data})
            return Response({"error": serializer.error})
        return Response({"message": "Gig does not exist"})

    def delete(self, request, gig_id):
        gig = self.get_gig(gig_id)
        if gig:
            gig.delete()
            return Response({"message": "Gig successfully deleted"}, status=status.HTTP_204_NO_CONTENT)
        return Response({"error": "Gig not found"}, status=status.HTTP_404_NOT_FOUND)
