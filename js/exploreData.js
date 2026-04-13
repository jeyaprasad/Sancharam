const exploreData = [
    {
        "name": "Marina Beach",
        "region": "North",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Chennai_-_bird%27s-eye_view.jpg",
        "description": "Marina Beach, or simply the Marina, is a natural urban beach in Chennai, Tamil Nadu, India, along the Bay of Bengal. The beach runs from near Fort ...",
        "location": "Chennai"
    },
    {
        "name": "Mahabalipuram",
        "region": "North",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f2/Mamallapuram_view.jpg",
        "description": "The Group of Monuments at Mahabalipuram is a collection of 7th- and 8th-century CE religious monuments in the coastal resort town of Mahabalipuram,...",
        "location": "Chengalpattu"
    },
    {
        "name": "Vellore Fort",
        "region": "North",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Vellorefort.jpg",
        "description": "Vellore Fort is a large 16th-century fort situated in heart of the Vellore city, in the state of Tamil Nadu, India built by the Emperors of Vijayan...",
        "location": "Vellore"
    },
    {
        "name": "Kanchipuram Temples",
        "region": "North",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c2/Parameswara_Vinnagaram.JPG",
        "description": "Kanchipuram, also known as Kanjeevaram or Kancheepuram, is a City in the Indian state of Tamil Nadu in Chennai Metropolitan Area. region, 72\u00a0km (45...",
        "location": "Kanchipuram"
    },
    {
        "name": "Pulicat Lake",
        "region": "North",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/cc/India_-_Pulicat_Lake_-_023_-_lake_landscape.jpg",
        "description": "Pulicat Lake is the second-largest brackish-water lagoon in India, measuring 759 square kilometres (293\u00a0sq\u00a0mi). A major part of the lagoon lies in ...",
        "location": "Tiruvallur"
    },
    {
        "name": "Vedanthangal Bird Sanctuary",
        "region": "North",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Vedanthangal_Lake.JPG",
        "description": "Vedanthangal Bird Sanctuary is a bird sanctuary in the Madurantakam taluk of the Chengalpattu district in the Indian state of Tamil Nadu. Establish...",
        "location": "Chengalpattu"
    },
    {
        "name": "Arunachalesvara Temple",
        "region": "North",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/26/Arunachalam_temple_from_a_nearby_hill.jpg",
        "description": "The Arunachalesvara Temple or Annamalaiyar Temple, is a Hindu temple dedicated to Shiva and Parvati, located at the foothills of the Arunachala hil...",
        "location": "Tiruvannamalai"
    },
    {
        "name": "Gingee Fort",
        "region": "North",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Gingee_Fort_Hill_view_from_road.jpg",
        "description": "Gingee Fort or Senji Fort in Tamil Nadu, India is one of the surviving forts in Tamil Nadu, India. It is popularly known as Great Wall of South Ind...",
        "location": "Viluppuram"
    },
    {
        "name": "Yelagiri",
        "region": "North",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4e/01Yelagiri_Hills.jpg",
        "description": "Yelagiri, also spelled Elagiri, is a hill station located in Tirupathur district of Tamil Nadu, India. Located at an altitude of 1,410\u00a0m (4,630\u00a0ft)...",
        "location": "Tirupattur"
    },
    {
        "name": "Hogenakkal Falls",
        "region": "North",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/52/Hogenakkal_Falls_Close.jpg",
        "description": "Hogenakkal Falls is a waterfall in South India on the Kaveri river on the border between Dharmapuri district of Tamil Nadu and Chamrajnagar distric...",
        "location": "Dharmapuri"
    },
    {
        "name": "Meenakshi Amman Temple",
        "region": "South",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e9/An_aerial_view_of_Madurai_city_from_atop_of_Meenakshi_Amman_temple.jpg",
        "description": "Meenakshi Temple, also known as Meenakshi Sundareswarar Temple, is a historic Hindu temple located on the southern bank of the Vaigai River in Madu...",
        "location": "Madurai"
    },
    {
        "name": "Vivekananda Rock Memorial",
        "region": "South",
        "image": "https://upload.wikimedia.org/wikipedia/commons/b/b6/RockMemorial.jpg",
        "description": "Vivekananda Rock Memorial is a monument and popular tourist attraction in Kanyakumari, India's southernmost tip. The memorial stands on one of the ...",
        "location": "Kanyakumari"
    },
    {
        "name": "Ramanathaswamy Temple",
        "region": "South",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ramanathaswamy_temple7.JPG/1920px-Ramanathaswamy_temple7.JPG",
        "description": "Ramanathaswamy Temple is a Hindu temple dedicated to the Hindu god Shiva located on Rameswaram island in the state of Tamil Nadu, India. It is one ...",
        "location": "Rameswaram"
    },
    {
        "name": "Dhanushkodi",
        "region": "South",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Final_Dhanush_002.jpg",
        "description": "Dhanushkodi is an abandoned town at the south-eastern tip of Pamban Island of the state of Tamil Nadu in India. It is south-east of Pamban and is a...",
        "location": "Rameswaram"
    },
    {
        "name": "Kodaikanal Lake",
        "region": "South",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Kodaikanal_lake.jpg",
        "description": "Kodaikanal Lake, also known as Kodai Lake, is a manmade lake located in the Kodaikanal city in Dindigul district in Tamil Nadu, India. Sir Vere Hen...",
        "location": "Dindigul"
    },
    {
        "name": "Courtallam Falls",
        "region": "South",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Courtallam.jpg",
        "description": "Courtallam, natively spelt Kutr\u0101lam or Kutt\u0101lam, is a panchayat town situated at a mean elevation of 160\u00a0m (520\u00a0ft) in the foothills of the Western...",
        "location": "Tenkasi"
    },
    {
        "name": "Tiruchendur Murugan Temple",
        "region": "South",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Thiruchendur11.jpg",
        "description": "Subramanya Swamy Temple is a Hindu temple dedicated to Hindu god Murugan, located in Thoothukudi district, Tamil Nadu. It is one of the Six Abodes ...",
        "location": "Thoothukudi"
    },
    {
        "name": "Vattakottai Fort",
        "region": "South",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/2c/Vattakottai_Fort_Entrance.jpg",
        "description": "Vattakottai Fort is a seaside fort near Kanyakumari, Tamil Nadu, at the southern tip of India. It was built in the 18th century as a coastal defenc...",
        "location": "Kanyakumari"
    },
    {
        "name": "Pamban Bridge",
        "region": "South",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Pamban_Bridge_Train_Passing.jpg",
        "description": "Pamban Bridge was a railway bridge that connected the town of Rameswaram on Pamban Island with Mandapam in mainland India. Opened on 24 February 19...",
        "location": "Rameswaram"
    },
    {
        "name": "Thirumalai Nayakkar Mahal",
        "region": "South",
        "image": "https://upload.wikimedia.org/wikipedia/commons/8/87/Madurai_Nayak_Palace_Collage.jpg",
        "description": "Thirumalai Nayakkar Mahal is a palace completed in 1636 by Tirumala Nayaka, a king of the Madurai Nayak dynasty, who ruled Madurai from 1623 to 165...",
        "location": "Madurai"
    },
    {
        "name": "Ooty Botanical Gardens",
        "region": "West",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Botanical_Gardens_-_Ootacamund_%28Ooty%29_-_India_03.JPG",
        "description": "The Government Botanical Garden is a botanical garden in Udhagamandalam, near Coimbatore (Ooty), Tamil Nadu state, India laid out in 1848. The gard...",
        "location": "The Nilgiris"
    },
    {
        "name": "Doddabetta Peak",
        "region": "West",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Doddabettateles.jpg",
        "description": "Doddabetta is the highest mountain in the Nilgiri Mountains at 2,637 metres (8,652\u00a0ft). There is a reserved forest area around the peak. It is 9\u00a0km...",
        "location": "The Nilgiris"
    },
    {
        "name": "Coonoor",
        "region": "West",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/9b/CoonoorPanorama.jpg",
        "description": "Coonoor or Kunnur, is a taluk and a municipal town of the Nilgiris District in the Indian state of Tamil Nadu. As of 2011, the town had a populatio...",
        "location": "The Nilgiris"
    },
    {
        "name": "Mudumalai National Park",
        "region": "West",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Tiger_Drinking_Pond_Mudumalai_Mar21_DSC01310.jpg",
        "description": "Mudumalai National Park is a national park in the Nilgiri Mountains in Tamil Nadu in southern India. It covers 321\u00a0km2 (124\u00a0sq\u00a0mi) at an elevation ...",
        "location": "The Nilgiris"
    },
    {
        "name": "Siruvani Waterfalls",
        "region": "West",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/98/Siruvani_Falls_above_bathing_area.jpg",
        "description": "Siruvani Waterfalls is located 36\u00a0km (22\u00a0mi) west of Coimbatore in the Western Ghats in India. The reservoir at Siruvani was built by the Indian go...",
        "location": "Coimbatore"
    },
    {
        "name": "Marudhamalai",
        "region": "West",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/46/Maruthamalai_Rajagopuram_1.jpg",
        "description": "Marudhamalai is a suburb of Coimbatore in Tamil Nadu, India. Located along the Western Ghats, it is part of the Coimbatore Municipal Corporation. T...",
        "location": "Coimbatore"
    },
    {
        "name": "Aliyar Dam",
        "region": "West",
        "image": "assets/images/shared/kanniyakumari.png",
        "description": "A beautiful and culturally significant destination in Tamil Nadu.",
        "location": "Coimbatore"
    },
    {
        "name": "Valparai",
        "region": "West",
        "image": "https://upload.wikimedia.org/wikipedia/commons/1/12/Tea_Estates_in_Valparai.jpg",
        "description": "Valparai is a Taluk and hill station in the Coimbatore district of Tamil Nadu, India. It consists of Anamalai Tiger Reserve. It is located 3,474 fe...",
        "location": "Coimbatore"
    },
    {
        "name": "Bhavanisagar Dam",
        "region": "West",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/ca/BhavaniSagarDam.JPG",
        "description": "Bhavanisagar Dam or Lower Bhavani Dam, is an earthen dam located in Erode district in the Indian state of Tamil Nadu. The dam is constructed on the...",
        "location": "Erode"
    },
    {
        "name": "Yercaud",
        "region": "West",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Yercaud_lake.jpg",
        "description": "Yercaud, also spelt Erkad, is a town and hill station in Salem District in Tamil Nadu, India. Located in Servarayan Hills in the Eastern Ghats, it ...",
        "location": "Salem"
    },
    {
        "name": "Brihadisvara Temple",
        "region": "East",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Brihadisvara_Temple_during_Maha_Shivaratri-WUS03611_%28edit%29.jpg",
        "description": "Brihadisvara Temple, called Rajarajesvaram by its builder, and known locally as Thanjai Periya Kovil and Peruvudaiyar Kovil, is a Shaivite Hindu te...",
        "location": "Thanjavur"
    },
    {
        "name": "Pichavaram Mangrove",
        "region": "East",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Pichavaram-Pno.png",
        "description": "Pichavaram is one of the villages of Parangipettai in Cuddalore District, Tamil Nadu, India. It is located between the Vellar estuary in the north ...",
        "location": "Cuddalore"
    },
    {
        "name": "Auroville",
        "region": "East",
        "image": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Town_Hall_of_Auroville.jpg",
        "description": "Auroville is an experimental township in Viluppuram district, mostly in the state of Tamil Nadu, India, with some parts in the Union Territory of P...",
        "location": "Viluppuram"
    },
    {
        "name": "Navagraha Temples",
        "region": "East",
        "image": "assets/images/temple-placeholder.png",
        "description": "The Navagraha temples are a set of nine Hindu temples, each dedicated to one of the nine planetary deities, the Navagraham, in various places aroun...",
        "location": "Kumbakonam"
    },
    {
        "name": "Velankanni Church",
        "region": "East",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/59/Vailankanni_Basilica1.jpg",
        "description": "The Basilica of Our Lady of Good Health, also known as Sanctuary of Our Lady of Velankanni, is a Christian shrine located at the town of Velankanni...",
        "location": "Nagapattinam"
    },
    {
        "name": "Tranquebar",
        "region": "East",
        "image": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Fort_Dansborg.JPG",
        "description": "Tharangambadi, formerly Tranquebar, is a town in the Mayiladuthurai district of the Indian state of Tamil Nadu on the Coromandel Coast. It lies 15 ...",
        "location": "Mayiladuthurai"
    },
    {
        "name": "Manora Fort",
        "region": "East",
        "image": "https://upload.wikimedia.org/wikipedia/commons/5/54/Manora1.JPG",
        "description": "The Manora Fort is situated 20\u00a0km (12\u00a0mi) away from Pattukkottai, Tamil Nadu, India and 60\u00a0km (37\u00a0mi) away from Thanjavur. The fort was built by Ma...",
        "location": "Thanjavur"
    },
    {
        "name": "Point Calimere",
        "region": "East",
        "image": "assets/images/temple-placeholder.png",
        "description": "Point Calimere Wildlife and Bird Sanctuary is a protected area in Tamil Nadu, South India, covering 21.47\u00a0km2 (8.29\u00a0sq\u00a0mi) along the Palk Strait wh...",
        "location": "Nagapattinam"
    },
    {
        "name": "Poompuhar",
        "region": "East",
        "image": "assets/images/temple-placeholder.png",
        "description": "Puhar may refer to:",
        "location": "Mayiladuthurai"
    },
    {
        "name": "Chidambaram Temple",
        "region": "East",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/44/Le_temple_de_Shiva_Nataraja_%28Chidambaram%2C_Inde%29_%2814037020332%29.jpg",
        "description": "Thillai Nataraja Temple, also referred as the Chidambaram Nataraja Temple, is a Hindu temple dedicated to Nataraja, the form of Shiva as the lord o...",
        "location": "Cuddalore"
    },
    {
        "name": "Srirangam Temple",
        "region": "Central",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/Ranganathaswamy_temple_tiruchirappalli.jpg",
        "description": "The Ranganathaswamy Temple is a Hindu temple dedicated to Ranganathar and his consort Ranganayaki. The temple is located in Srirangam, Tiruchirapal...",
        "location": "Tiruchirappalli"
    },
    {
        "name": "Rockfort Temple",
        "region": "Central",
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/62/The_tank_and_Rockfort_Trichinopoly.jpg",
        "description": "Tiruchirappalli Rock Fort, locally known as Malaikottai, is a historic fortification and temple complex built on an ancient rock. It is located in ...",
        "location": "Tiruchirappalli"
    },
    {
        "name": "Kallanai Dam",
        "region": "Central",
        "image": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Grand_Anicut%2C_Kallanai_%2811876067114%29.jpg",
        "description": "Kallanai is an ancient dam built by Karikala of Chola dynasty in 150 CE. It was built across the Kaveri river flowing from Tiruchirapalli District ...",
        "location": "Thanjavur"
    },
    {
        "name": "Gangaikonda Cholapuram",
        "region": "Central",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/48/GangaiKonda_Cholapuram%28Front_View%29.JPG",
        "description": "Ga\u1e45gaiko\u1e47\u1e0da Ch\u014d\u1e3bapuram is a village located near to Jayankondam, Ariyalur district, Tamil Nadu, India. It became the capital of the Chola dynasty i...",
        "location": "Ariyalur"
    },
    {
        "name": "Airavatesvara Temple",
        "region": "Central",
        "image": "https://upload.wikimedia.org/wikipedia/commons/9/99/A_different_view_of_Airavatesvara_Temple.jpg",
        "description": "Airavatesvara Temple is a Hindu temple of Chola architecture located in Darasuram, a suburb of Kumbakonam, Thanjavur District in the South Indian s...",
        "location": "Kumbakonam"
    },
    {
        "name": "Viralimalai Temple",
        "region": "Central",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/25/Back_view_of_temple%2C_viralimalai%2C_murugan_kovil.jpg",
        "description": "Viralimalai Subramanya Swamy Temple is one of the famous Hindu temples dedicated to Lord Muruga, located in the town of Viralimalai about 28\u00a0km fro...",
        "location": "Pudukkottai"
    },
    {
        "name": "Chettinad Mansions",
        "region": "Central",
        "image": "https://upload.wikimedia.org/wikipedia/commons/d/d0/The_Chettinad_palace_karaikudi_2013-09-07_00-11.jpg",
        "description": "Chettinad is a region in Tamil Nadu comprising 56 villages in Sivaganga district and 20 villages in Pudukottai district, which was historically rul...",
        "location": "Sivaganga"
    },
    {
        "name": "Sithannavasal Cave",
        "region": "Central",
        "image": "https://upload.wikimedia.org/wikipedia/commons/2/22/%E0%AE%9A%E0%AE%BF%E0%AE%A4%E0%AF%8D%E0%AE%A4%E0%AE%A9%E0%AF%8D%E0%AE%A9%E0%AE%B5%E0%AE%BE%E0%AE%9A%E0%AE%B2%E0%AF%8D.jpg",
        "description": "Sittanavasal Cave is a 2nd-century Tamil \u015arama\u1e47a complex of caves in Sittanavasal village in Pudukottai district of Tamil Nadu, India. Its name is ...",
        "location": "Pudukkottai"
    },
    {
        "name": "Thirumayam Fort",
        "region": "Central",
        "image": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Fort_of_thirumayam.jpg",
        "description": "The Thirumayam Fort is a 40-acre wide fortress in the town of Thirumayam in Pudukkottai-Karaikudi Highway in Pudukkottai District, Tamil Nadu, Indi...",
        "location": "Pudukkottai"
    },
    {
        "name": "Tiruvanaikkaval",
        "region": "Central",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Tiruvanaikaval5.jpg/1920px-Tiruvanaikaval5.jpg",
        "description": "Jambukeswarar Temple, Thiruvanaikaval is a temple of Shiva in Tiruchirapalli district, in the state of Tamil Nadu, India. It is one of the five maj...",
        "location": "Tiruchirappalli"
    },
    {
        "name": "Chandira Choodeswarar Temple",
        "region": "West",
        "image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Chandirachoodeshwarar_Rock_Temple_Hosur.jpg",
        "description": "An ancient hilltop temple dedicated to Lord Shiva, offering panoramic views of Hosur city and the surrounding lush landscapes. A major regional pilgrimage site.",
        "location": "Krishnagiri"
    }
];
