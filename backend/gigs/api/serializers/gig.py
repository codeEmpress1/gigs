from rest_framework import serializers
from ..models.gig import Gig


class GigSerializer(serializers.ModelSerializer):

    class Meta:
        model = Gig
        fields = "__all__"