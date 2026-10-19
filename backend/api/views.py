from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ContactInquiry, SecurityService, TeamMember, Testimonial
from .serializers import (
    ContactInquirySerializer,
    SecurityServiceSerializer,
    TeamMemberSerializer,
    TestimonialSerializer,
)

class ContactInquiryViewSet(viewsets.ModelViewSet):
    queryset = ContactInquiry.objects.all()
    serializer_class = ContactInquirySerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            {
                "success": True,
                "message": "Thank you for contacting Gorkhali Security Services. Our team will review your inquiry and get back to you shortly.",
                "data": serializer.data,
            },
            status=status.HTTP_201_CREATED,
            headers=headers,
        )


class SecurityServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SecurityService.objects.all()
    serializer_class = SecurityServiceSerializer
    lookup_field = 'slug'


class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamMember.objects.filter(is_active=True)
    serializer_class = TeamMemberSerializer


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.filter(is_published=True)
    serializer_class = TestimonialSerializer


@api_view(['GET'])
def api_root(request):
    return Response({
        "status": "online",
        "service": "Gorkhali Security Services API",
        "endpoints": {
            "inquiries": "/api/inquiries/",
            "services": "/api/services/",
            "team": "/api/team/",
            "testimonials": "/api/testimonials/",
        }
    })
