from .views.gig import CreateGig, GigList, GigDetail
from django.urls import path, re_path


urlpatterns = [

    path('create', CreateGig.as_view(), name="reservation"),
    path('', GigList.as_view(), name="all_gigs"),
    path('delete/<uuid:gig_id>', GigDetail.as_view(), name="delete_gig"),
    path('edit/<uuid:gig_id>', GigDetail.as_view(), name="edit_gig"),
]