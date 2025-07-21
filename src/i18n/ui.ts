export const languages = {
  en: "English",
  km: "Khmer",
};

export type SupportedLanguage = keyof typeof languages;
export type Language = keyof typeof languages;
export const defaultLang = "en";
export const showDefaultLang = true;
export const ui: Record<string, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.about_us": "About DSDP",
    "nav.about_team": "DSDP Team",
    "nav.about.question&answer": "Q&A",
    "nav.our_partners": "Our Partners",
    "nav.how_to_apply": "How to Apply",
    "nav.media_hub": "Media Hub",
    "nav.video_and_media": "Video & Media",
    "nav.news_and_events": "News & Event",
    "nav.contact": "Contact",

    "about.title": "អំពីកម្មវិធី",
    "about.visionTitle": "ចក្ខុវិស័យ៖",
    "about.visionDescription":
      "ក្នុងនាមជាសេនាធិកាផ្ទាល់របស់ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ ក.អ.ជ.ឌ. មានចក្ខុវិស័យក្នុងការ៖",
    "about.vision1":
      "ចូលរួម​អនុវត្តយុទ្ធសាស្រ្តបញ្ចកោណដំណាក់កាលទី១ របស់រាជរដ្ឋាភិបាលកម្ពុជា នីតិកាលទី៧ នៃរដ្ឋសភា",
    "about.vision2":
      "ចូលរួមអនុវត្តក្របខណ្ឌគោលនយោបាយសេដ្ឋកិច្ច និងសង្គមឌីជីថល ២០២១-២០៣៥",
    "about.vision3": "និងក្របខណ្ឌគោលនយោបាយរដ្ឋាភិបាលឌីជីថល ២០២២-២០៣៥",
    "about.vision4":
      "លើកកម្ពស់ស្តង់ដាការអប់រំលើជំនាញដែលពាក់ព័ន្ធនឹងបច្ចេកវិទ្យាឌីជីថល និងគាំទ្រដល់ដំណើរការអភិវឌ្ឍមូលធនមនុស្សឌីជីថល",
    "about.mission.title": "បេសកកម្ម៖",
    "about.mission.description":
      "ក.អ.ជ.ឌ. បានប្តេជ្ញាបំពេញនូវបេសកកម្មរបស់ខ្លួនយ៉ាងពេញទំហឹងជាអាទិ៍គឺ៖",
    "about.mission1":
      "ផ្តល់ថវិកាសិក្សាដោយមិនគិតការប្រាក់លើជំនាញបច្ចេកវិទ្យាឌីជីថល",
    "about.mission2":
      "អភិវឌ្ឍន៍ និងប្រើប្រាស់បច្ចេកវិទ្យាឌីជីថលសម្រាប់បម្រើដល់ការអប់រំ  និង",
    "about.mission3": "បង្កើនធនធានមនុស្សដែលមានចំណេះដឹងផ្នែកបច្ចេកវិទ្យាឌីជីថល",
    "about.whatIsDsdp.title": "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (ក.អ.ជ.ឌ.)",
    "about.whatIsDsdp.description":
      "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ដែលមានឈ្មោះជាភាសាអង់គ្លេស “Digital Skill Development Program (DSDP)” ក្រោមការផ្តួចផ្តើមគំនិតបង្កើត និងអភិវឌ្ឍឡើងដោយក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ តាមរយៈការប្រើប្រាស់ធនធានពី វិភាគទានប្រចាំឆ្នាំរបស់មូល និធិនៃការកសាងសមត្ថភាព និងស្រាវជ្រាវ និងការអភិវឌ្ឍលើវិស័យ ទូរគមនាគមន៍ និងបច្ចេកវិទ្យា គមនាគមន៍និងព័ត៌មាន(ស.អ.) និងវិភាគទានពីប្រភពស្របច្បាប់ផ្សេងៗទៀត ក្នុងគោលដៅគាំទ្រ ដល់ដំណើរការអភិវឌ្ឍមូលធន មនុស្សឌីជីថល ឆ្លើយតបទៅនឹង តម្រូវការនៃការអភិវឌ្ឍសេដ្ឋកិច្ច និងសង្គមឌីជីថល និងរដ្ឋាភិបាលឌីជីថល។​",
    "about.benefits.title": "តើ ក.អ.ជ.ឌ. ជួយដល់សិស្ស-និស្សិត ដូចម្តេច?",
    "about.benefits.description":
      "កម្មវិធី ក.អ.ជ.ឌ. នឹងផ្តល់ ថវិកាសិក្សាដោយមិនគិតការប្រាក់ ជូនទៅដល់សិស្ស និស្សិត និងមន្ត្រីរាជការនៅតាមស្ថាប័ន សាធារណៈ និងឯកជន ដែលមានបំណងចង់បន្តការសិក្សាក្នុងកម្រិតសិក្សា ថ្នាក់បរិញ្ញាបត្រ បរិញ្ញាបត្រជាន់ខ្ពស់ បណ្ឌិត ឬក្នុងវគ្គបណ្តុះបណ្តាលកម្រិតវិញ្ញាបនបត្រលើជំនាញបច្ចេកវិទ្យាឌីជីថលផ្សេង នៅគ្រឹះស្ថានឧត្តមសិក្សាសាធារណៈ និងឯកជន។ បន្ថែមពីលើការផ្តល់ថវិកាសិក្សា កម្មវិធី ក.អ.ជ.ឌ. ក៏ផ្តល់ការប្រឹក្សាយោបល់ដល់សិស្ស និស្សិត និងមន្ត្រីរាជការគ្រប់រូប ព្រមទាំងជួយសម្របសម្រួលការស្នាក់នៅរបស់និស្សិតមកពីតាមខេត្តផងដែរ។",
    "about.conditionReturnMoney.title": "លក្ខខណ្ឌនៃការសងថវិកាមក ក.អ.ជ.ឌ. វិញ!",
    "about.conditionReturnMoney.description":
      "កម្មវិធី ក.អ.ជ.ឌ. ផ្តល់លក្ខខណ្ឌងាយស្រួលសម្រាប់បេក្ខជន ដើម្បីធ្វើការសងប្រាក់ដល់កម្មវិធីក.អ.ជ.ឌ. វិញ បន្ទាប់ពីសិស្សនិស្សិតបញ្ចប់ការសិក្សា និងទទួលបានការងារធ្វើ។",
    "about.howToReturnMoney.title": "តើត្រូវសងដោយរបៀបណា?",
    "about.howToReturnMoney.description":
      "ការសងថវិកា ត្រូវធ្វើឡើងតាមរយៈការបង់រំសល់ប្រចាំខែ ដោយផ្អែកតាមលក្ខខណ្ឌដែលបានព្រមព្រៀងគ្នារវាងបេក្ខជន និង ក.អ.ជ.ឌ. ដោយធ្វើឡើងនៅក្នុងប្រព័ន្ធគណនារំលស់ឥតការប្រាក់តាមអនឡាញរបស់ក្រុមការងាររដ្ឋបាលផ្ទាល់។",

    "about.team.title1": "រចនាសម្ព័ន្ធលេខាធិការដ្ឋាន",
    "about.team.title2": "ក្រុមការងារស្នូល",
    "about.team.title2.description":
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "about.team.card1.name": "H.E. Apsara",
    "about.team.card1.position": "Head of Finance",
    "about.team.card2.name": "H.E. Apsara",
    "about.team.card2.position": "Head of Finance",
    "about.team.card3.name": "H.E. Apsara",
    "about.team.card3.position": "Head of Finance",
    "about.team.card4.name": "H.E. Apsara",
    "about.team.card4.position": "Head of Finance",
  },

  km: {
    "nav.home": "ទំព័រដើម",
    "nav.about": "អំពីពួកយើង",
    "nav.about_us": "អំពីឌីអេសឌីធី",
    "nav.about_team": "អំពីក្រុមឌីអេសឌីធី",
    "nav.about.question&answer": "សំណួរ​និងចម្លើយ",
    "nav.our_partners": "ដៃគូរបស់យើង",
    "nav.how_to_apply": "របៀបដាក់ពាក្យ",
    "nav.media_hub": "មជ្ឈមណ្ឌលព័ត៌មាន",
    "nav.video_and_media": "វីឌីអូនិងប្រព័ន្ធផ្សព្វផ្សាយ",
    "nav.news_and_events": "ព័ត៌មាននិង​ព្រឹត្តិការណ៍",
    "nav.contact": "ទំនាក់ទំនង",

    "about.title": "អំពីកម្មវិធី",
    "about.visionTitle": "ចក្ខុវិស័យ៖",
    "about.visionDescription":
      "ក្នុងនាមជាសេនាធិកាផ្ទាល់របស់ក្រសួងប្រៃសណីយ៍ និងទូរគមនាគមន៍ ក.អ.ជ.ឌ. មានចក្ខុវិស័យក្នុងការ៖",
    "about.vision1":
      "ចូលរួម​អនុវត្តយុទ្ធសាស្រ្តបញ្ចកោណដំណាក់កាលទី១ របស់រាជរដ្ឋាភិបាលកម្ពុជា នីតិកាលទី៧ នៃរដ្ឋសភា",
    "about.vision2":
      "ចូលរួមអនុវត្តក្របខណ្ឌគោលនយោបាយសេដ្ឋកិច្ច និងសង្គមឌីជីថល ២០២១-២០៣៥",
    "about.vision3": "និងក្របខណ្ឌគោលនយោបាយរដ្ឋាភិបាលឌីជីថល ២០២២-២០៣៥",
    "about.vision4":
      "លើកកម្ពស់ស្តង់ដាការអប់រំលើជំនាញដែលពាក់ព័ន្ធនឹងបច្ចេកវិទ្យាឌីជីថល និងគាំទ្រដល់ដំណើរការអភិវឌ្ឍមូលធនមនុស្សឌីជីថល",
    "about.mission.title": "បេសកកម្ម៖",
    "about.mission.description":
      "ក.អ.ជ.ឌ. បានប្តេជ្ញាបំពេញនូវបេសកកម្មរបស់ខ្លួនយ៉ាងពេញទំហឹងជាអាទិ៍គឺ៖",
    "about.mission1":
      "ផ្តល់ថវិកាសិក្សាដោយមិនគិតការប្រាក់លើជំនាញបច្ចេកវិទ្យាឌីជីថល",
    "about.mission2":
      "អភិវឌ្ឍន៍ និងប្រើប្រាស់បច្ចេកវិទ្យាឌីជីថលសម្រាប់បម្រើដល់ការអប់រំ  និង",
    "about.mission3": "បង្កើនធនធានមនុស្សដែលមានចំណេះដឹងផ្នែកបច្ចេកវិទ្យាឌីជីថល",
    "about.whatIsDsdp.title": "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (ក.អ.ជ.ឌ.)",
    "about.whatIsDsdp.description":
      "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ដែលមានឈ្មោះជាភាសាអង់គ្លេស “Digital Skill Development Program (DSDP)” ក្រោមការផ្តួចផ្តើមគំនិតបង្កើត និងអភិវឌ្ឍឡើងដោយក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ តាមរយៈការប្រើប្រាស់ធនធានពី វិភាគទានប្រចាំឆ្នាំរបស់មូល និធិនៃការកសាងសមត្ថភាព និងស្រាវជ្រាវ និងការអភិវឌ្ឍលើវិស័យ ទូរគមនាគមន៍ និងបច្ចេកវិទ្យា គមនាគមន៍និងព័ត៌មាន(ស.អ.) និងវិភាគទានពីប្រភពស្របច្បាប់ផ្សេងៗទៀត ក្នុងគោលដៅគាំទ្រ ដល់ដំណើរការអភិវឌ្ឍមូលធន មនុស្សឌីជីថល ឆ្លើយតបទៅនឹង តម្រូវការនៃការអភិវឌ្ឍសេដ្ឋកិច្ច និងសង្គមឌីជីថល និងរដ្ឋាភិបាលឌីជីថល។​",
    "about.benefits.title": "តើ ក.អ.ជ.ឌ. ជួយដល់សិស្ស-និស្សិត ដូចម្តេច?",
    "about.benefits.description":
      "កម្មវិធី ក.អ.ជ.ឌ. នឹងផ្តល់ ថវិកាសិក្សាដោយមិនគិតការប្រាក់ ជូនទៅដល់សិស្ស និស្សិត និងមន្ត្រីរាជការនៅតាមស្ថាប័ន សាធារណៈ និងឯកជន ដែលមានបំណងចង់បន្តការសិក្សាក្នុងកម្រិតសិក្សា ថ្នាក់បរិញ្ញាបត្រ បរិញ្ញាបត្រជាន់ខ្ពស់ បណ្ឌិត ឬក្នុងវគ្គបណ្តុះបណ្តាលកម្រិតវិញ្ញាបនបត្រលើជំនាញបច្ចេកវិទ្យាឌីជីថលផ្សេង នៅគ្រឹះស្ថានឧត្តមសិក្សាសាធារណៈ និងឯកជន។ បន្ថែមពីលើការផ្តល់ថវិកាសិក្សា កម្មវិធី ក.អ.ជ.ឌ. ក៏ផ្តល់ការប្រឹក្សាយោបល់ដល់សិស្ស និស្សិត និងមន្ត្រីរាជការគ្រប់រូប ព្រមទាំងជួយសម្របសម្រួលការស្នាក់នៅរបស់និស្សិតមកពីតាមខេត្តផងដែរ។",
    "about.conditionReturnMoney.title": "លក្ខខណ្ឌនៃការសងថវិកាមក ក.អ.ជ.ឌ. វិញ!",
    "about.conditionReturnMoney.description":
      "កម្មវិធី ក.អ.ជ.ឌ. ផ្តល់លក្ខខណ្ឌងាយស្រួលសម្រាប់បេក្ខជន ដើម្បីធ្វើការសងប្រាក់ដល់កម្មវិធីក.អ.ជ.ឌ. វិញ បន្ទាប់ពីសិស្សនិស្សិតបញ្ចប់ការសិក្សា និងទទួលបានការងារធ្វើ។",
    "about.howToReturnMoney.title": "តើត្រូវសងដោយរបៀបណា?",
    "about.howToReturnMoney.description":
      "ការសងថវិកា ត្រូវធ្វើឡើងតាមរយៈការបង់រំសល់ប្រចាំខែ ដោយផ្អែកតាមលក្ខខណ្ឌដែលបានព្រមព្រៀងគ្នារវាងបេក្ខជន និង ក.អ.ជ.ឌ. ដោយធ្វើឡើងនៅក្នុងប្រព័ន្ធគណនារំលស់ឥតការប្រាក់តាមអនឡាញរបស់ក្រុមការងាររដ្ឋបាលផ្ទាល់។",

    "about.team.title1": "រចនាសម្ព័ន្ធលេខាធិការដ្ឋាន",
    "about.team.title2": "ក្រុមការងារស្នូល",
    "about.team.title2.description":
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "about.team.card1.name": "H.E. Apsara",
    "about.team.card1.position": "Head of Finance",
    "about.team.card2.name": "H.E. Apsara",
    "about.team.card2.position": "Head of Finance",
    "about.team.card3.name": "H.E. Apsara",
    "about.team.card3.position": "Head of Finance",
    "about.team.card4.name": "H.E. Apsara",
    "about.team.card4.position": "Head of Finance",
  },
} as const;

export const routes: Record<string, Record<string, string>> = {
  en: {
    news: "news",
    contact: "contact",
  },
  km: {
    news: "news",
    contact: "contact",
  },
};
