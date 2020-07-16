import uuid
from django.db import models
from django.contrib.postgres.fields import ArrayField, JSONField
import json
from django.core.serializers.json import DjangoJSONEncoder


class Gig(models.Model):
    gig_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    role = models.CharField(max_length=256)
    company = models.CharField(max_length=256)
    location = JSONField(encoder=DjangoJSONEncoder)
    tags = ArrayField(base_field=models.CharField(max_length=256))
    salary = JSONField(encoder=DjangoJSONEncoder)
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.role