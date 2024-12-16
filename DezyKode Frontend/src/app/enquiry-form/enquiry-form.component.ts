import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css'],
})
export class EnquiryFormComponent {
  enquiryForm: FormGroup;

  states: string[] = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];

  cities: { [key: string]: string[] } = {
    AndhraPradesh: [
      'Adoni',
      'Amaravati',
      'Anantapur',
      'Chandragiri',
      'Chittoor',
      'Dowlaiswaram',
      'Eluru',
      'Guntur',
      'Kadapa',
      'Kakinada',
      'Kurnool',
      'Machilipatnam',
      'Nagarjunakoṇḍa',
      'Rajahmundry',
      'Srikakulam',
      'Tirupati',
      'Vijayawada',
      'Visakhapatnam',
      'Vizianagaram',
      'Yemmiganur',
    ],

    ArunachalPradesh: ['Itanagar'],

    Assam: [
      'Dhuburi',
      'Dibrugarh',
      'Dispur',
      'Guwahati',
      'Jorhat',
      'Nagaon',
      'Sivasagar',
      'Silchar',
      'Tezpur',
      'Tinsukia',
    ],

    Bihar: [
      'Ara',
      'Barauni',
      'Begusarai',
      'Bettiah',
      'Bhagalpur',
      'Bihar Sharif',
      'Bodh Gaya',
      'Buxar',
      'Chapra',
      'Darbhanga',
      'Dehri',
      'Dinapur Nizamat',
      'Gaya',
      'Hajipur',
      'Jamalpur',
      'Katihar',
      'Madhubani',
      'Motihari',
      'Munger',
      'Muzaffarpur',
      'Patna',
      'Purnia',
      'Pusa',
      'Saharsa',
      'Samastipur',
      'Sasaram',
      'Sitamarhi',
      'Siwan',
    ],

    Chandigarh: ['Chandigarh'],

    Chhattisgarh: [
      'Ambikapur',
      'Bhilai',
      'Bilaspur',
      'Dhamtari',
      'Durg',
      'Jagdalpur',
      'Raipur',
      'Rajnandgaon',
    ],

    DadraAndNagarHaveliAndDamanAndDiu: ['Daman', 'Diu', 'Silvassa'],

    Delhi: ['Delhi', 'New Delhi'],

    Goa: ['Madgaon', 'Panaji'],

    Gujarat: [
      'Ahmadabad',
      'Amreli',
      'Bharuch',
      'Bhavnagar',
      'Bhuj',
      'Dwarka',
      'Gandhinagar',
      'Godhra',
      'Jamnagar',
      'Junagadh',
      'Kandla',
      'Khambhat',
      'Kheda',
      'Mahesana',
      'Morbi',
      'Nadiad',
      'Navsari',
      'Okha',
      'Palanpur',
      'Patan',
      'Porbandar',
      'Rajkot',
      'Surat',
      'Surendranagar',
      'Valsad',
      'Veraval',
    ],

    Haryana: [
      'Ambala',
      'Bhiwani',
      'Chandigarh',
      'Faridabad',
      'Firozpur Jhirka',
      'Gurugram',
      'Hansi',
      'Hisar',
      'Jind',
      'Kaithal',
      'Karnal',
      'Kurukshetra',
      'Panipat',
      'Pehowa',
      'Rewari',
      'Rohtak',
      'Sirsa',
      'Sonipat',
    ],

    HimachalPradesh: [
      'Bilaspur',
      'Chamba',
      'Dalhousie',
      'Dharmshala',
      'Hamirpur',
      'Kangra',
      'Kullu',
      'Mandi',
      'Nahan',
      'Shimla',
      'Una',
    ],

    JammuAndKashmir: [
      'Anantnag',
      'Baramula',
      'Doda',
      'Gulmarg',
      'Jammu',
      'Kathua',
      'Punch',
      'Rajouri',
      'Srinagar',
      'Udhampur',
    ],

    Jharkhand: [
      'Bokaro',
      'Chaibasa',
      'Deoghar',
      'Dhanbad',
      'Dumka',
      'Giridih',
      'Hazaribag',
      'Jamshedpur',
      'Jharia',
      'Rajmahal',
      'Ranchi',
      'Saraikela',
    ],

    Karnataka: [
      'Badami',
      'Ballari',
      'Bengaluru',
      'Belagavi',
      'Bhadravati',
      'Bidar',
      'Chikkamagaluru',
      'Chitradurga',
      'Davangere',
      'Halebid',
      'Hassan',
      'Hubballi-Dharwad',
      'Kalaburagi',
      'Kolar',
      'Madikeri',
      'Mandya',
      'Mangaluru',
      'Mysuru',
      'Raichur',
      'Shivamogga',
      'Shravanabelagola',
      'Shrirangapattana',
      'Tumakuru',
      'Vijayapura',
    ],

    Kerala: [
      'Alappuzha',
      'Vatakara',
      'Idukki',
      'Kannur',
      'Kochi',
      'Kollam',
      'Kottayam',
      'Kozhikode',
      'Mattancheri',
      'Palakkad',
      'Thalassery',
      'Thiruvananthapuram',
      'Thrissur',
    ],

    Ladakh: ['Kargil', 'Leh'],

    MadhyaPradesh: [
      'Balaghat',
      'Barwani',
      'Betul',
      'Bharhut',
      'Bhind',
      'Bhojpur',
      'Bhopal',
      'Burhanpur',
      'Chhatarpur',
      'Chhindwara',
      'Damoh',
      'Datia',
      'Dewas',
      'Dhar',
      'Dr. Ambedkar Nagar (Mhow)',
      'Guna',
      'Gwalior',
      'Hoshangabad',
      'Indore',
      'Itarsi',
      'Jabalpur',
      'Jhabua',
      'Khajuraho',
      'Khandwa',
      'Khargone',
      'Maheshwar',
      'Mandla',
      'Mandsaur',
      'Morena',
      'Murwara',
      'Narsimhapur',
      'Narsinghgarh',
      'Narwar',
      'Neemuch',
      'Nowgong',
      'Orchha',
      'Panna',
      'Raisen',
      'Rajgarh',
      'Ratlam',
      'Rewa',
      'Sagar',
      'Sarangpur',
      'Satna',
      'Sehore',
      'Seoni',
      'Shahdol',
      'Shajapur',
      'Sheopur',
      'Shivpuri',
      'Ujjain',
      'Vidisha',
    ],

    Maharashtra: [
      'Ahmadnagar',
      'Akola',
      'Amravati',
      'Aurangabad',
      'Bhandara',
      'Bhusawal',
      'Bid',
      'Buldhana',
      'Chandrapur',
      'Daulatabad',
      'Dhule',
      'Jalgaon',
      'Kalyan',
      'Karli',
      'Kolhapur',
      'Mahabaleshwar',
      'Malegaon',
      'Matheran',
      'Mumbai',
      'Nagpur',
      'Nanded',
      'Nashik',
      'Osmanabad',
      'Pandharpur',
      'Parbhani',
      'Pune',
      'Ratnagiri',
      'Sangli',
      'Satara',
      'Sevagram',
      'Solapur',
      'Thane',
      'Ulhasnagar',
      'Vasai-Virar',
      'Wardha',
      'Yavatmal',
    ],

    Manipur: ['Imphal'],

    Meghalaya: ['Cherrapunji', 'Shillong'],

    Mizoram: ['Aizawl', 'Lunglei'],

    Nagaland: ['Kohima', 'Mon', 'Phek', 'Wokha', 'Zunheboto'],

    Odisha: [
      'Balangir',
      'Baleshwar',
      'Baripada',
      'Bhubaneshwar',
      'Brahmapur',
      'Cuttack',
      'Dhenkanal',
      'Kendujhar',
      'Konark',
      'Koraput',
      'Paradip',
      'Phulabani',
      'Puri',
      'Sambalpur',
      'Udayagiri',
    ],

    Puducherry: ['Karaikal', 'Mahe', 'Puducherry', 'Yanam'],

    Punjab: [
      'Amritsar',
      'Batala',
      'Chandigarh',
      'Faridkot',
      'Firozpur',
      'Gurdaspur',
      'Hoshiarpur',
      'Jalandhar',
      'Kapurthala',
      'Ludhiana',
      'Nabha',
      'Patiala',
      'Rupnagar',
      'Sangrur',
    ],

    Rajasthan: [
      'Abu',
      'Ajmer',
      'Alwar',
      'Amer',
      'Barmer',
      'Beawar',
      'Bharatpur',
      'Bhilwara',
      'Bikaner',
      'Bundi',
      'Chittaurgarh',
      'Churu',
      'Dhaulpur',
      'Dungarpur',
      'Ganganagar',
      'Hanumangarh',
      'Jaipur',
      'Jaisalmer',
      'Jalor',
      'Jhalawar',
      'Jhunjhunu',
      'Jodhpur',
      'Kishangarh',
      'Kota',
      'Merta',
      'Nagaur',
      'Nathdwara',
      'Pali',
      'Phalodi',
      'Pushkar',
      'Sawai Madhopur',
      'Shahpura',
      'Sikar',
      'Sirohi',
      'Tonk',
      'Udaipur',
    ],

    Sikkim: ['Gangtok', 'Gyalshing', 'Lachung', 'Mangan'],

    TamilNadu: [
      'Arcot',
      'Chengalpattu',
      'Chennai',
      'Chidambaram',
      'Coimbatore',
      'Cuddalore',
      'Dharmapuri',
      'Dindigul',
      'Erode',
      'Kanchipuram',
      'Kanniyakumari',
      'Kodaikanal',
      'Kumbakonam',
      'Madurai',
      'Mamallapuram',
      'Nagappattinam',
      'Nagercoil',
      'Palayamkottai',
      'Pudukkottai',
      'Rajapalayam',
      'Ramanathapuram',
      'Salem',
      'Thanjavur',
      'Tiruchchirappalli',
      'Tirunelveli',
      'Tiruppur',
      'Thoothukudi',
      'Udhagamandalam',
      'Vellore',
    ],

    Telangana: [
      'Hyderabad',
      'Karimnagar',
      'Khammam',
      'Mahbubnagar',
      'Nizamabad',
      'Sangareddi',
      'Warangal',
    ],

    Tripura: ['Agartala'],

    UttarPradesh: [
      'Agra',
      'Aligarh',
      'Amroha',
      'Ayodhya',
      'Azamgarh',
      'Bahraich',
      'Ballia',
      'Banda',
      'Bara Banki',
      'Bareilly',
      'Basti',
      'Bijnor',
      'Bithur',
      'Budaun',
      'Bulandshahr',
      'Deoria',
      'Etah',
      'Etawah',
      'Faizabad',
      'Farrukhabad-cum-Fatehgarh',
      'Fatehpur',
      'Fatehpur Sikri',
      'Ghaziabad',
      'Ghazipur',
      'Gonda',
      'Gorakhpur',
      'Hamirpur',
      'Hardoi',
      'Hathras',
      'Jalaun',
      'Jaunpur',
      'Jhansi',
      'Kannauj',
      'Kanpur',
      'Lakhimpur',
      'Lalitpur',
      'Lucknow',
      'Mainpuri',
      'Mathura',
      'Meerut',
      'Mirzapur-Vindhyachal',
      'Moradabad',
      'Muzaffarnagar',
      'Partapgarh',
      'Pilibhit',
      'Prayagraj',
      'Rae Bareli',
      'Rampur',
      'Saharanpur',
      'Sambhal',
      'Shahjahanpur',
      'Sitapur',
      'Sultanpur',
      'Tehri',
      'Varanasi',
    ],

    Uttarakhand: [
      'Almora',
      'Dehra Dun',
      'Haridwar',
      'Mussoorie',
      'Nainital',
      'Pithoragarh',
    ],

    WestBengal: [
      'Alipore',
      'Alipur Duar',
      'Asansol',
      'Baharampur',
      'Bally',
      'Balurghat',
      'Bankura',
      'Baranagar',
      'Barasat',
      'Barrackpore',
      'Basirhat',
      'Bhatpara',
      'Bishnupur',
      'Budge Budge',
      'Burdwan',
      'Chandernagore',
      'Darjeeling',
      'Diamond Harbour',
      'Dum Dum',
      'Durgapur',
      'Halisahar',
      'Haora',
      'Hugli',
      'Ingraj Bazar',
      'Jalpaiguri',
      'Kalimpong',
      'Kamarhati',
      'Kanchrapara',
      'Kharagpur',
      'Cooch Behar',
      'Kolkata',
      'Krishnanagar',
      'Malda',
      'Midnapore',
      'Murshidabad',
      'Nabadwip',
      'Palashi',
      'Panihati',
      'Purulia',
      'Raiganj',
      'Santipur',
      'Shantiniketan',
      'Shrirampur',
      'Siliguri',
      'Siuri',
      'Tamluk',
      'Titagarh',
    ],
  };

  interestedFor: string[] = [
    'UI&UX',
    'Web Developer Intern',
    'Digital Marketing',
  ];

  // Education Levels and Streams
  educationLevels: string[] = [
    'High School',
    'Undergraduate',
    'Graduate',
    'Postgraduate',
    'Others',
  ];
  // streams: { [key: string]: string[] } = {
  //   'High School': ['Science', 'Commerce', 'Arts'],
  //   Undergraduate: ['Medical', 'Commerce', 'Arts', 'Engineering'],
  //   Graduate: ['PhD in Arts', 'PhD in Engineering'],
  //   Postgraduate: ['MBA', 'MSc', 'MA', 'MTech'],
  // };

  selectedEducationLevel: string | null = null;
  // showOtherEducationInput: boolean = false;
  // currentStreams: string[] = [];
  selectedState: string = '';
  filteredCities: string[] = [];
  selectedCity: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    // Define the form structure with necessary fields
    this.enquiryForm = this.fb.group({
      firstName: ['', Validators.required],
      // middleName: [''],
      lastName: ['', Validators.required],
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      emailAddress: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      educationLevel: ['', Validators.required], // Add educationLevel
      // stream: [''], // Add stream field
      // educationStatus: [''],
      // otherEducation: [''], // Field for 'Other' education level input
      interestedFor: ['', Validators.required],
      address: ['', Validators.required],
      reference: [''],
    });

    // Listen for state changes
    this.enquiryForm.get('state')?.valueChanges.subscribe((state) => {
      this.updateCities(state);
    });
  }

  // Update filteredCities when state changes
  updateCities(state: string): void {
    this.filteredCities = this.cities[state] || [];
    // Reset the city field when state changes
    this.enquiryForm.get('city')?.reset();
  }
  onStateChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const selectedState = target.value;
    this.updateCities(selectedState);
  }

  // // Listen for changes in the education level field
  // this.enquiryForm.get('educationLevel')?.valueChanges.subscribe((value) => {
  //   this.selectedEducationLevel = value;
  //   this.showOtherEducationInput = value === 'Others';

  //   // Update the available streams based on selected education level
  //   if (value && value !== 'Others') {
  //     this.currentStreams = this.streams[value] || [];
  //   } else {
  //     this.currentStreams = [];
  //   }

  // Reset fields if necessary
  //   if (value !== 'Others') {
  //     this.enquiryForm.get('otherEducation')?.reset();
  //   }
  // });

  // }
  // onStateChange(selectedState: string): void {
  //   this.updateCities(selectedState);
  // }
  onReset() {
    this.enquiryForm.reset();
  }

  // Form submission handler
  onSubmit(): void {
    if (this.enquiryForm.valid) {
      // Native browser confirmation dialog
      const confirmed = confirm('Do you want to submit the enquiry form?');

      if (confirmed) {
        // Proceed with submission logic
        this.http
          .post('http://localhost:8087/api/enquiries', this.enquiryForm.value)
          .subscribe(
            (response) => {
              alert('Enquiry submitted successfully!');
              console.log('Enquiry submitted:', response);
              this.enquiryForm.reset(); // Reset the form on successful submission
            },
            (error) => {
              console.error('Error submitting enquiry:', error);
            }
          );
      } else {
        // Handle form submission cancel
        alert('Submission cancelled.');
      }
    }
  }
}
