<!-- gig_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False) -->
    role = models.CharField(max_length=256)
    company = models.CharField(max_length=256)
    location = JSONField(encoder=DjangoJSONEncoder)
    tags = ArrayField(base_field=models.CharField(max_length=256))
    salary = JSONField(encoder=DjangoJSONEncoder)