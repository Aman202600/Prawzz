export const SERVICE_CATEGORIES = [
  {
    id: 'vet-clinics',
    title: 'Veterinary Clinics',
    shortTitle: 'Vet Clinics',
    slug: 'veterinary-clinics',
    icon: 'Stethoscope',
    description: 'Routine healthcare, annual vaccinations, preventative care & consultations by certified veterinarians.',
    providerCount: 148,
    badge: 'Popular',
    accentColor: 'from-emerald-500/20 to-teal-500/10',
    iconColor: 'text-emerald-700 bg-emerald-100'
  },
  {
    id: 'pet-hospitals',
    title: 'Pet Hospitals',
    shortTitle: 'Pet Hospitals',
    slug: 'pet-hospitals',
    icon: 'Building2',
    description: 'Fully equipped 24/7 surgical facilities, intensive care units (ICU), inpatient monitoring & trauma care.',
    providerCount: 64,
    badge: '24/7 Emergency',
    accentColor: 'from-blue-500/20 to-cyan-500/10',
    iconColor: 'text-blue-700 bg-blue-100'
  },
  {
    id: 'pet-boarding',
    title: 'Pet Boarding & Daycare',
    shortTitle: 'Pet Boarding',
    slug: 'pet-boarding',
    icon: 'Home',
    description: 'Cage-free boarding, luxury private suites, supervised play yards, CCTV video updates & specialized diets.',
    providerCount: 92,
    badge: 'Verified Care',
    accentColor: 'from-amber-500/20 to-orange-500/10',
    iconColor: 'text-amber-700 bg-amber-100'
  },
  {
    id: 'diagnostics',
    title: 'Animal Diagnostics',
    shortTitle: 'Diagnostics',
    slug: 'diagnostics',
    icon: 'Activity',
    description: 'Digital X-rays, ultrasonography, complete blood pathology, biochemistry analyzers & rapid viral screening.',
    providerCount: 41,
    badge: 'Fast Reports',
    accentColor: 'from-purple-500/20 to-indigo-500/10',
    iconColor: 'text-purple-700 bg-purple-100'
  },
  {
    id: 'ambulance',
    title: 'Pet Ambulances',
    shortTitle: 'Pet Ambulance',
    slug: 'pet-ambulance',
    icon: 'Truck',
    description: 'On-demand mobile emergency transit, oxygen support, mobile stretcher & trained veterinary paramedics.',
    providerCount: 28,
    badge: 'Rapid Response',
    accentColor: 'from-rose-500/20 to-red-500/10',
    iconColor: 'text-rose-700 bg-rose-100'
  },
  {
    id: 'animal-ngos',
    title: 'Animal Welfare NGOs',
    shortTitle: 'Animal NGOs',
    slug: 'animal-ngos',
    icon: 'HeartHandshake',
    description: 'Community stray rescues, free sterilization drives, adoption centers & compassionate shelter rehabilitation.',
    providerCount: 53,
    badge: 'Non-Profit',
    accentColor: 'from-teal-500/20 to-emerald-500/10',
    iconColor: 'text-teal-700 bg-teal-100'
  }
];

export const LOCATIONS_LIST = [
  'All Locations',
  'Indiranagar, Bengaluru',
  'Koramangala, Bengaluru',
  'Whitefield, Bengaluru',
  'HSR Layout, Bengaluru',
  'Jayanagar, Bengaluru',
  'Bandra West, Mumbai',
  'South Extension, New Delhi'
];

export const MOCK_PROVIDERS = [
  {
    id: 'p1',
    name: 'Paws & Claws Multispeciality Vet Clinic',
    category: 'Veterinary Clinics',
    categorySlug: 'vet-clinics',
    rating: 4.9,
    reviewsCount: 238,
    isVerified: true,
    location: 'Indiranagar, Bengaluru',
    address: '12th Main Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
    distance: 1.2,
    phone: '+91 98450 12345',
    timings: '08:30 AM - 09:30 PM (Daily)',
    isOpenNow: true,
    isEmergency24x7: false,
    pricingTier: '₹₹',
    consultationFee: '₹600',
    badge: 'Top Rated Clinic',
    image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80',
    about: 'Paws & Claws is a premier veterinary practice offering complete companion animal care. Equipped with stress-free exam rooms, low-stress handling protocols, advanced dental operatory, and preventative wellness plans for cats and dogs.',
    services: [
      'Comprehensive Physical Exam',
      'Core & Lifestyle Vaccinations',
      'Ultrasonic Dental Scaling',
      'Microchipping & Pet Passports',
      'Feline-Friendly Consultation Room',
      'Nutritional Counseling'
    ],
    doctors: [
      {
        name: 'Dr. Ananya Sharma',
        qualifications: 'B.V.Sc & A.H, M.V.Sc (Small Animal Medicine)',
        experience: '12 years experience',
        specialty: 'Feline Internal Medicine & Dermatology'
      },
      {
        name: 'Dr. Rahul Venkatesh',
        qualifications: 'B.V.Sc & A.H',
        experience: '8 years experience',
        specialty: 'Preventive Health & Soft Tissue Care'
      }
    ],
    facilities: [
      'Separate Dog & Cat Waiting Lounges',
      'In-house Clinical Laboratory',
      'Digital Patient Records',
      'Fully Stocked Pharmacy',
      'Sanitized Recovery Kennels'
    ],
    sampleReviews: [
      {
        id: 'r1',
        author: 'Priya Sundaram',
        pet: 'Milo (Golden Retriever)',
        rating: 5,
        date: '3 days ago',
        comment: 'Dr. Ananya is extraordinarily compassionate. Milo usually gets anxious at vet visits, but the calm atmosphere here put him right at ease!'
      },
      {
        id: 'r2',
        author: 'Vikram Joshi',
        pet: 'Leo (Persian Cat)',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Cleanest clinic I have seen in Indiranagar. Transparent pricing and clear explanation of vaccine schedules.'
      }
    ]
  },
  {
    id: 'p2',
    name: 'Apex 24/7 Animal Trauma & Surgical Hospital',
    category: 'Pet Hospitals',
    categorySlug: 'pet-hospitals',
    rating: 4.8,
    reviewsCount: 412,
    isVerified: true,
    location: 'Koramangala, Bengaluru',
    address: '80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034',
    distance: 2.8,
    phone: '+91 80 4912 8800',
    emergencyNumber: '+91 99000 88247',
    timings: 'Open 24 Hours / 7 Days',
    isOpenNow: true,
    isEmergency24x7: true,
    pricingTier: '₹₹₹',
    consultationFee: '₹850',
    badge: '24/7 Trauma ICU',
    image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80',
    about: 'Apex Animal Hospital is a tertiary-level critical care hospital operating continuously. Featuring dual laminar air flow sterile surgical suites, mechanical ventilators, oxygen cages, canine blood bank facilities, and round-the-clock emergency surgeons.',
    services: [
      '24/7 Emergency & Resuscitation',
      'Orthopedic & Fracture Fixation',
      'Minimally Invasive Laparoscopy',
      'Canine Blood Bank & Transfusions',
      'Oxygen Therapy Intensive Ward',
      'Critical Inpatient Monitoring'
    ],
    doctors: [
      {
        name: 'Dr. Siddharth Menon',
        qualifications: 'M.V.Sc (Surgery & Radiology), Dipl. ECVS Fellow',
        experience: '16 years experience',
        specialty: 'Trauma Surgery & Orthopedics'
      },
      {
        name: 'Dr. Tanya Rodrigues',
        qualifications: 'B.V.Sc & A.H, M.V.Sc (Veterinary Critical Care)',
        experience: '10 years experience',
        specialty: 'ICU & Emergency Resuscitation'
      }
    ],
    facilities: [
      '24/7 Dedicated Emergency Triage',
      'Blood Gas Analyzer & ICU Cages',
      'In-house Blood Bank',
      'Digital High-frequency X-Ray & Ultrasound',
      'Ambulance Bay & Isolation Ward'
    ],
    sampleReviews: [
      {
        id: 'r3',
        author: 'Arjun Mehta',
        pet: 'Bruno (Labrador)',
        rating: 5,
        date: '1 week ago',
        comment: 'Saved Bruno’s life at 3:00 AM after acute gastric torsion. The emergency team reacted within seconds. Eternally grateful.'
      }
    ]
  },
  {
    id: 'p3',
    name: 'Serene Tails Luxury Pet Resort & Boarding',
    category: 'Pet Boarding & Daycare',
    categorySlug: 'pet-boarding',
    rating: 4.9,
    reviewsCount: 184,
    isVerified: true,
    location: 'Whitefield, Bengaluru',
    address: 'Varthur Main Rd, near Palm Meadows, Whitefield, Bengaluru 560066',
    distance: 4.5,
    phone: '+91 97412 55321',
    timings: '07:00 AM - 08:30 PM (Check-in/out)',
    isOpenNow: true,
    isEmergency24x7: false,
    pricingTier: '₹₹',
    consultationFee: '₹950 / night',
    badge: 'Cage-Free Resort',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80',
    about: 'Set over 2 sprawling lush acres, Serene Tails provides premium cage-free boarding, socialization yards, agility tracks, and temperature-controlled private cabins. Dedicated handlers provide 24/7 supervision, customized feeding schedules, and WhatsApp video daily updates.',
    services: [
      'Private Climate-Controlled Suites',
      'Twice Daily Video Calls & Photo Logs',
      'Agility Park & Splash Pools',
      'Home-Cooked / Hypoallergenic Meals',
      'Daycare & Social Playgroups',
      'On-call Resident Veterinarian'
    ],
    doctors: [
      {
        name: 'Rohan Deshmukh (Lead Behaviorist)',
        qualifications: 'Certified Professional Canine Trainer (CPDT-KA)',
        experience: '9 years experience',
        specialty: 'Canine Socialization & Separation Anxiety'
      }
    ],
    facilities: [
      '2 Acres Secure Perimeter Fenced Lawns',
      'Individual Splash Pool For Dogs',
      'High-Definition CCTV Coverage',
      'Feline Penthouse Wing',
      'Air Purified Sleeping Quarters'
    ],
    sampleReviews: [
      {
        id: 'r4',
        author: 'Sneha & Rohan',
        pet: 'Bella & Cooper (Beagles)',
        rating: 5,
        date: 'Yesterday',
        comment: 'We traveled abroad for 10 days with complete peace of mind. Bella had the time of her life in the play pool!'
      }
    ]
  },
  {
    id: 'p4',
    name: 'VetScan Comprehensive Diagnostics & Imaging',
    category: 'Animal Diagnostics',
    categorySlug: 'diagnostics',
    rating: 4.7,
    reviewsCount: 156,
    isVerified: true,
    location: 'Indiranagar, Bengaluru',
    address: '100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038',
    distance: 1.6,
    phone: '+91 80 2520 9944',
    timings: '07:30 AM - 08:30 PM (Mon-Sat)',
    isOpenNow: true,
    isEmergency24x7: false,
    pricingTier: '₹₹',
    consultationFee: '₹400 (Sample Collection)',
    badge: 'Same-Day Digital Reports',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
    about: 'VetScan is an ISO-certified animal specialized reference laboratory. We deliver rapid, automated clinical pathology, digital 500mA X-rays, high-resolution echocardiography, hormonal assays, and cytology reported by board-certified veterinary pathologists.',
    services: [
      'Complete Hemogram & Biochemistry',
      'Digital High-Definition Radiography',
      'Abdominal Ultrasonography & Doppler',
      'Thyroid & Hormonal Assay Panels',
      'Fine Needle Aspiration Cytology (FNAC)',
      'Home Sample Collection for Pets'
    ],
    doctors: [
      {
        name: 'Dr. Meera Iyer',
        qualifications: 'M.V.Sc (Veterinary Pathology)',
        experience: '14 years experience',
        specialty: 'Clinical Cytology & Oncopathology'
      }
    ],
    facilities: [
      'Automated 5-part Hematology Counter',
      'Digital DICOM PACS Cloud Viewing',
      'Sterile Biopsy Sampling Suite',
      'Temperature Regulated Courier Transit'
    ],
    sampleReviews: [
      {
        id: 'r5',
        author: 'Karthik Nair',
        pet: 'Rocky (Rottweiler)',
        rating: 5,
        date: '5 days ago',
        comment: 'Blood test and ultrasound results were delivered directly via WhatsApp in just 3 hours. Fast and professional.'
      }
    ]
  },
  {
    id: 'p5',
    name: 'RapidRescue 24x7 Emergency Pet Ambulance',
    category: 'Pet Ambulances',
    categorySlug: 'ambulance',
    rating: 4.9,
    reviewsCount: 290,
    isVerified: true,
    location: 'HSR Layout, Bengaluru',
    address: 'Sector 1, HSR Layout, Bengaluru 560102 (Dispatches city-wide)',
    distance: 3.1,
    phone: '+91 99019 11911',
    emergencyNumber: '+91 99019 11911',
    timings: '24 Hours Emergency Dispatch',
    isOpenNow: true,
    isEmergency24x7: true,
    pricingTier: '₹₹',
    consultationFee: '₹1200 base transit',
    badge: 'Emergency Transit',
    image: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?auto=format&fit=crop&w=800&q=80',
    about: 'Bengaluru’s dedicated GPS-monitored animal ambulance fleet. Customized with hydraulic ramps, oxygen concentrators, suction apparatus, trauma immobilization kits, and trained veterinary paramedics for critical bed-to-hospital transfers.',
    services: [
      'GPS-Tracked Rapid Dispatch',
      'Continuous Continuous Oxygen Support',
      'Paramedic On-board Stabilization',
      'Stretcher & Spinal Immobilization Board',
      'Direct Hospital Triage Handover',
      'Post-Operative Safe Home Relocation'
    ],
    doctors: [
      {
        name: 'Vipin Kumar',
        qualifications: 'Certified Veterinary Emergency Paramedic',
        experience: '7 years emergency field transit',
        specialty: 'Pre-hospital Animal Trauma Stabilization'
      }
    ],
    facilities: [
      'Built-in Dual Oxygen Cylinders',
      'Crash Cart with Emergency Therapeutics',
      'Real-time GPS Tracking Link for Pet Owners',
      'Sanitized Washable Stainless Interior'
    ],
    sampleReviews: [
      {
        id: 'r6',
        author: 'Divya Shenoy',
        pet: 'Zara (Shih Tzu)',
        rating: 5,
        date: '3 weeks ago',
        comment: 'Arrived at our doorstep in 18 minutes flat when Zara suffered acute respiratory distress. The oxygen setup saved her.'
      }
    ]
  },
  {
    id: 'p6',
    name: 'Karuna Animal Rescue & Rehabilitation Sanctuary',
    category: 'Animal Welfare NGOs',
    categorySlug: 'animal-ngos',
    rating: 4.8,
    reviewsCount: 345,
    isVerified: true,
    location: 'Jayanagar, Bengaluru',
    address: 'Near Madhavan Park, 3rd Block, Jayanagar, Bengaluru 560011',
    distance: 3.9,
    phone: '+91 80 2665 4321',
    timings: '09:00 AM - 06:00 PM (Visitor & Adoption Hours)',
    isOpenNow: true,
    isEmergency24x7: false,
    pricingTier: 'Non-Profit',
    consultationFee: 'Free / Voluntary Donation',
    badge: 'Community Non-Profit',
    image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=800&q=80',
    about: 'Karuna Sanctuary is a registered non-profit working tirelessly for community animal rehabilitation. We run community vaccination drives, birth-control (ABC) surgeries, stray trauma rescues, and ethical adoption programs finding loving forever homes.',
    services: [
      'Community Stray Rescue & Treatment',
      'Animal Birth Control (ABC Sterilization)',
      'Puppy & Kitten Ethical Adoption Camps',
      'Anti-Rabies Mass Vaccination',
      'Cruelty Reporting & Legal Assistance',
      'Senior Dog Forever Hospice Care'
    ],
    doctors: [
      {
        name: 'Dr. Ramesh Babu',
        qualifications: 'B.V.Sc & A.H',
        experience: '20+ years humanitarian animal welfare',
        specialty: 'Shelter Medicine & Stray Rehabilitation'
      }
    ],
    facilities: [
      'Large Open-air Rehabilitation Aviary & Enclosures',
      'Solar Powered Sterilization Theatre',
      'Adoption Interaction Garden',
      'Isolation Recovery Ward for Rescued Strays'
    ],
    sampleReviews: [
      {
        id: 'r7',
        author: 'Siddharth Roy',
        pet: 'Adopted Indie pup (Gini)',
        rating: 5,
        date: '1 month ago',
        comment: 'We adopted our sweet Indie girl from Karuna. They guided us patiently through behavioral training and nutrition!'
      }
    ]
  },
  {
    id: 'p7',
    name: 'CarePet Holistic Veterinary Centre',
    category: 'Veterinary Clinics',
    categorySlug: 'vet-clinics',
    rating: 4.6,
    reviewsCount: 119,
    isVerified: true,
    location: 'Koramangala, Bengaluru',
    address: '1st Cross, 5th Block, Koramangala, Bengaluru 560095',
    distance: 2.1,
    phone: '+91 98441 77221',
    timings: '09:00 AM - 08:00 PM (Tue-Sun, Mon Closed)',
    isOpenNow: true,
    isEmergency24x7: false,
    pricingTier: '₹₹',
    consultationFee: '₹550',
    badge: 'Integrative Care',
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
    about: 'CarePet blends evidence-based modern veterinary medicine with gentle integrative therapies including veterinary acupuncture, laser physical therapy for geriatric arthritic pets, and customized nutritional plans.',
    services: [
      'General Veterinary Consultations',
      'Class IV Therapeutic Laser Therapy',
      'Geriatric Arthritis Pain Management',
      'Allergy Testing & Desensitization',
      'Microscopic Ear Cytology',
      'Home Visit Services Available'
    ],
    doctors: [
      {
        name: 'Dr. Shalini Gupta',
        qualifications: 'B.V.Sc & A.H, Certified Veterinary Acupuncturist (CVA)',
        experience: '11 years experience',
        specialty: 'Integrative Pain Management & Senior Pet Care'
      }
    ],
    facilities: [
      'Low-Stress Padded Exam Tables',
      'Therapeutic Laser Suite',
      'Herbal & Prescription Dispensary'
    ],
    sampleReviews: [
      {
        id: 'r8',
        author: 'Nandita S.',
        pet: 'Sheru (13-yr-old German Shepherd)',
        rating: 5,
        date: '2 weeks ago',
        comment: 'The laser therapy sessions brought mobility back to our old boy. He is climbing stairs again without whines.'
      }
    ]
  },
  {
    id: 'p8',
    name: 'Guardian 24x7 Multi-Specialty Pet Hospital',
    category: 'Pet Hospitals',
    categorySlug: 'pet-hospitals',
    rating: 4.7,
    reviewsCount: 265,
    isVerified: true,
    location: 'Indiranagar, Bengaluru',
    address: 'Old Airport Road, near Domlur Flyover, Bengaluru 560071',
    distance: 1.9,
    phone: '+91 80 4115 6789',
    emergencyNumber: '+91 99800 11999',
    timings: '24 Hours Open',
    isOpenNow: true,
    isEmergency24x7: true,
    pricingTier: '₹₹₹',
    consultationFee: '₹750',
    badge: 'Advanced Surgical Suite',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    about: 'Guardian Hospital features top veterinary specialists across cardiology, oncology, neurosurgery, and gastroenterology. Outfitted with endoscopes, hemodialysis support, and continuous electronic telemetry.',
    services: [
      '24/7 Inpatient Medical Care',
      'Endoscopic Foreign Body Removal',
      'Cardiac Echocardiography & Holter',
      'Orthopedic TPLO Cruciate Surgery',
      'Post-Surgical Intensive Care Unit',
      'Specialist Second Opinions'
    ],
    doctors: [
      {
        name: 'Dr. Arun Cherian',
        qualifications: 'M.V.Sc (Veterinary Surgery), PhD',
        experience: '18 years experience',
        specialty: 'Complex Orthopedics & Spinal Neuro'
      }
    ],
    facilities: [
      'Advanced Anesthesia Vaporizers with Capnography',
      'Cardiac Monitor Telemetry Units',
      'Isolation Ward for Infectious Parvo Patients',
      'Pharmacy with Rare Emergency Antidotes'
    ],
    sampleReviews: [
      {
        id: 'r9',
        author: 'Kunal Kapoor',
        pet: 'Simba (French Bulldog)',
        rating: 5,
        date: '4 days ago',
        comment: 'Brachycephalic airway corrective surgery was performed with utter perfection. Simba breathes effortlessly now.'
      }
    ]
  }
];

export const TRUST_STATS = [
  { label: 'Verified Animal Care Providers', value: '1,400+', icon: 'ShieldCheck' },
  { label: 'Happy Pet Parents Served', value: '45,000+', icon: 'Smile' },
  { label: 'Emergency Network Response', value: '< 15 mins', icon: 'Clock' },
  { label: 'Average Platform Rating', value: '4.85 / 5', icon: 'Star' }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Instant Discovery & Smart Filters',
    desc: 'Filter verified clinics, 24/7 hospitals, boarding retreats, and NGOs by distance, rating, and open status in seconds.',
    icon: 'Search'
  },
  {
    title: 'Multi-Category Pet Care Ecosystem',
    desc: 'From routine puppy vaccinations and luxury resort stays to emergency oxygen ambulances, access all services under one roof.',
    icon: 'Grid'
  },
  {
    title: 'Verified Doctors & Transparent Pricing',
    desc: 'Detailed vet qualifications, transparent consultation fees, available equipment, and authentic pet parent feedback.',
    icon: 'BadgeCheck'
  },
  {
    title: 'Emergency Ready & 24/7 Support',
    desc: 'Direct hotline access to trauma ICU wards, blood banks, and GPS-tracked pet ambulances when seconds count.',
    icon: 'AlertCircle'
  }
];

