from django.core.management.base import BaseCommand
from api.models import SecurityService, TeamMember, Testimonial

class Command(BaseCommand):
    help = 'Seeds initial services, team members, and testimonials'

    def handle(self, *args, **options):
        self.stdout.write("Seeding Gorkhali Security data...")

        # 1. Services
        services_data = [
            {
                "title": "Sports Club Security",
                "slug": "sports-club-security",
                "short_description": "Dedicated security solutions for elite sports clubs, ensuring safe environments with specialized crowd management.",
                "detailed_description": "Our sports club security personnel undergo rigorous tactical crowd management, conflict de-escalation, and perimeter protection training to safeguard players, VIPs, and spectators.",
                "icon_name": "Shield",
                "order": 1,
            },
            {
                "title": "Events Security",
                "slug": "events-security",
                "short_description": "Comprehensive security for high-profile events, festivals, and corporate gatherings with professional coordination.",
                "detailed_description": "End-to-end event security planning including access control, metal detection screening, VIP escort, emergency egress management, and covert monitoring.",
                "icon_name": "Users",
                "order": 2,
            },
            {
                "title": "Elite Bodyguards",
                "slug": "elite-bodyguards",
                "short_description": "VIP personal protection for high-profile individuals, ensuring privacy and safety in any environment.",
                "detailed_description": "Close protection officers trained under elite international defense and Gurkha tactical protocols, providing discreet and unwavering 24/7 personal safety.",
                "icon_name": "UserPlus",
                "order": 3,
            },
            {
                "title": "General Security",
                "slug": "general-security",
                "short_description": "Advanced 24/7 monitoring and physical security for high-end residential and commercial assets.",
                "detailed_description": "Manned guarding, biometric gate inspection, mobile patrols, and integration with modern electronic surveillance systems.",
                "icon_name": "Video",
                "order": 4,
            },
        ]

        for s in services_data:
            obj, created = SecurityService.objects.update_or_create(
                slug=s["slug"],
                defaults=s
            )
            action = "Created" if created else "Updated"
            self.stdout.write(f"  [{action}] Service: {obj.title}")

        # 2. Team Members
        team_data = [
            {
                "name": "Manoj Kumar Shrestha",
                "designation": "Chairman",
                "category": "leadership",
                "bio": "Manoj Kumar Shrestha 'Gorkhali' is Chairman of Gorkhali Security Services LLC and MPM IT Services LLC in the UAE. He is a businessman, social worker, and Vice President of the Non-Resident Nepali Association (NRNA) International Coordination Council. Recipient of the COVID-19 Hero Award from Sheikh Al Maktoum.",
                "order": 1,
            },
            {
                "name": "Brigadier General (Retd.) Nirman Singh Gurung",
                "designation": "Advisor – Gurkhas Security Service LLC, UAE",
                "category": "advisor",
                "bio": "Former senior Nepal Army officer with over 30 years of leadership, operational command, and United Nations peacekeeping experience in Yugoslavia, Lebanon, Ethiopia/Eritrea, DR Congo, and South Sudan. Recipient of the Gorkha Dakshin Bahu IV.",
                "order": 2,
            },
            {
                "name": "Thaneshwor Shapkota",
                "designation": "Finance Manager",
                "category": "management",
                "bio": "Ensures fiscal discipline and strategic capital allocation to sustain state-of-the-art security apparatus with operational efficiency and defensive technology.",
                "order": 3,
            },
            {
                "name": "Ramesh Gautam",
                "designation": "Corporate Strategy Manager",
                "category": "management",
                "bio": "Strategic foresight and adaptive planning to navigate complex security environments and maintain gold standards in protective intelligence.",
                "order": 4,
            },
            {
                "name": "Bijayata Hamal",
                "designation": "Chief Technical Officer",
                "category": "management",
                "bio": "Deploys sophisticated digital fortress architectures blending artificial intelligence, cybersecurity frameworks, and real-time electronic surveillance.",
                "order": 5,
            },
            {
                "name": "Ayuv Bastola",
                "designation": "Digital Marketing Head",
                "category": "management",
                "bio": "Implements strategic communications and targeted brand positioning aligning Gorkhali Security's elite reputation with international defense standards.",
                "order": 6,
            },
            {
                "name": "Ram Tamang",
                "designation": "Relation Manager",
                "category": "management",
                "bio": "Builds elite client partnerships on trust and transparent communication, aligning corporate security requirements with tactical solutions.",
                "order": 7,
            },
        ]

        for t in team_data:
            obj, created = TeamMember.objects.update_or_create(
                name=t["name"],
                defaults=t
            )
            action = "Created" if created else "Updated"
            self.stdout.write(f"  [{action}] Team: {obj.name}")

        # 3. Testimonials
        testimonials_data = [
            {
                "client_name": "Ahmed Al Mansoori",
                "designation_or_company": "Executive Director, Dubai Real Estate Corp",
                "rating": 5,
                "content": "Gorkhali Security provided exemplary executive protection during our international real estate summit. Highly disciplined and discreet.",
            },
            {
                "client_name": "Elena Rostova",
                "designation_or_company": "Private Family Office, Palm Jumeirah",
                "rating": 5,
                "content": "Unmatched professionalism. The residential security team gives our family absolute peace of mind 24/7.",
            },
            {
                "client_name": "Marcus Vance",
                "designation_or_company": "Events Director, Global Sports Forum",
                "rating": 5,
                "content": "Outstanding crowd control and VIP bodyguard coordination. Will definitely hire Gorkhali Security for all upcoming tours.",
            },
        ]

        for tm in testimonials_data:
            obj, created = Testimonial.objects.update_or_create(
                client_name=tm["client_name"],
                defaults=tm
            )
            action = "Created" if created else "Updated"
            self.stdout.write(f"  [{action}] Testimonial: {obj.client_name}")

        self.stdout.write(self.style.SUCCESS("Successfully seeded all data!"))
