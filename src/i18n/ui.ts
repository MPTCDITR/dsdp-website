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
    // Navigation
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
    //Hero Carousel
    "home.hero.title":
      "Digital Skills Development Program (DSDP) - Empowering Human Resource Development",
    "home.hero.description":
      "The DSDP aims to develop digital human resources in response to the needs of the digital economy and society, as well as the digital government. The program provides interest-free scholarships to students, trainees, and civil servants in public and private institutions, along with free consultations!",

    "home.hero.somdach":
      "somdach Hun Manet presides over the opening ceremony of the Digital Government Forum and Cambodia-International Digital Government and Technology Exhibition",
    "home.hero.somdach.description":
      "Phnom Penh: On March 11, 2024, Somdach, Hun Manet, presided over the opening ceremony of the Digital Government Forum and the Cambodia-International Digital Government and Technology Exhibition. During this event, His Majesty visited the exhibition showcasing community technology centers and digital skills development programs by the Ministry of Posts and Telecommunications. This initiative aims to enhance digital capabilities among civil servants and citizens, reducing the digital divide.",

    "btn.moredetails": "More Details",
    "applyStep.step1.title": "Step 1: Register",
    // How to Apply Page
    "howToApply.title-1": "Easy Steps to Apply",
    "howToApply.title-2": "for DSDP Project Funding",
    "howToApply.subTitle":
      "The Digital Skills Development Program provides opportunities for students, university students, and civil servants who meet the following criteria:",
    // News and Events Page
    "newsAndEvents.title":
      "Latest Digital Events, Both Local and International",
    "newsAndEvents.short_description":
      "Discover the latest news, announcements, and upcoming events from our programs. From student success stories to application deadlines, workshops, and informational sessions, this is where you'll find everything happening in our mission to support digital education through interest-free student loans.",
    "newsAndEvents.readmore": "Read More",
    "newsAndEvents.no_posts": "There's no News & Events at the moment.",
    "newsAndEvents.sub_title": "News & Events",
    // CTA Buttons
    "btn.previous": "Previous",
    "btn.next": "Next",
  },
  km: {
    // Navigation
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
    //Hero Carousel
    "home.hero.title":
      "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ហៅកាត់ថា ក.អ.ជ.ឌ. គាំទ្រដល់ ដំណើរការអភិវឌ្ឍ មូលធនមនុស្ស",
    "home.hero.description":
      "គោលដៅចម្បងរបស់ ក.អ.ជ.ឌ. គឺចូលរួមអភិវឌ្ឍន៍មូលធនមនុស្សឌីជីថល ឆ្លើយតបទៅនឹងតម្រូវការនៃវឌ្ឍនាភាពសេដ្ឋកិច្ច និងសង្គមឌីជីថល និង រដ្ឋាភិបាលឌីជីថល។ កម្មវិធីនេះផ្តល់ថវិកាសិក្សាដោយមិនគិតការប្រាក់ជូន ទៅដល់សិស្ស និស្សិត និងមន្ត្រីរាជការតាមស្ថាប័នសាធារណៈ និងឯកជន គ្រប់រូប ព្រមជាមួយនឹងការប្រឹក្សាយោបល់នានាដោយឥតគិតថ្លៃផងដែរ!",
    "home.hero.somdach":
      "វិសម្តេចធិបតី ហ៊ុន ម៉ាណែត អញ្ជើញជាអធិបតីក្នុងពិធីបើក វេទិការដ្ឋាភិបាលឌីជីថល និងពិព័រណ៍រដ្ឋាភិបាលឌីជីថល និងបច្ចេកវិទ្យាឌីជីថលកម្ពុជា-អន្តរជាតិ លើកទី ១",
    "home.hero.somdach.description":
      "ភ្នំពេញ៖ នាព្រឹកថ្ងៃទី១១ ខែមីនា ឆ្នាំ ២០២៤ សម្តេចមហាបវរធិបតី ហ៊ុន ម៉ាណែត នាយករដ្ឋមន្រ្តី នៃព្រះរាជាណាចក្រកម្ពុជា បានអញ្ជើញជាអធិបតីក្នុងពិធីបើក វេទិការដ្ឋាភិបាលឌីជីថល និង ពិព័រណ៍រដ្ឋាភិបាលឌីជីថល និង បច្ចេកវិទ្យាឌីជីថលកម្ពុជា-អន្តរជាតិ លើកទី ១ នៅមជ្ឈមណ្ឌលសន្និបាត និងពិព័រណ៍កោះពេជ្រ។ នៅក្នុងកម្មវិធីនេះផងដែរ សម្តេចធិបតីនាយករដ្ឋមន្ត្រី អញ្ជើញទស្សនាពិព័រណ៍រដ្ឋាភិបាលឌីជីថល និងបច្ចេកវិទ្យាឌីជីថលកម្ពុជា-អន្តរជាតិ ដោយក្នុងពិព័រណ៍នោះមានរួមមាន ស្តង់របស់មជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍ កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល និងកម្មវិធីបណ្តុះបណ្តាលផ្សេងទៀតរបស់ក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍។ តាមរយៈទស្សនាកិច្ចនេះ ឯកឧត្តម ជា វ៉ាន់ដេត រដ្ឋមន្ត្រីក្រសួងប្រៃសណីយ៍និងទូរគមនាគមន៍ បានទទួលបដិសណ្ឋារកិច្ច សម្តេចមហាបវរធិបតី ប្រកបដោយការស្វាគមន៍ និងគារវកិច្ចខ្ពង់ខ្ពស់។ ទន្ទឹមនេះ សម្តេចធិបតី បានចំណាយពេលវេលា ពិនិត្យស្វែងយល់បន្ថែម និងស្តាប់បទបង្ហាញដោយសង្ខេបអំពីមុខងារនិងគុណប្រយោជន៍ នៃមជ្ឈមណ្ឌលបច្ចេកវិទ្យាសហគមន៍ និងកម្មវិធីបណ្តុះបណ្តាល ដែលក្រសួងបាននឹងកំពុងអនុវត្ត ដែលវិធីសាស្ត្រមួយផ្នែកសម្រាប់បង្កើនសមត្ថភាពចាប់យកនិងប្រើប្រាស់បច្ចេកវិទ្យាឌីជីថលរបស់មន្ត្រី និងប្រជាពលរដ្ឋក្នុងសហគមន៍ ព្រមទាំងកាត់បន្ថយគម្លាតឌីជីថល។",
    "btn.moredetails": "លម្អិតបន្ថែម",
    "applyStep.step1.title": "ជំហានទី ១៖ ចុះឈ្មោះ",
    // How to Apply Page
    "howToApply.title-1": "ជំហានងាយៗនៃការដាក់ពាក្យ",
    "howToApply.title-2": "ស្នើសុំថវិកាគម្រោងរបស់ ក.អ.ជ.ឌ.",
    "howToApply.subTitle":
      "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ផ្តល់ឱកាសដល់ សិស្ស និស្សិត និងមន្ត្រីរាជការ ដែលបំពេញលក្ខខណ្ឌដូចខាងក្រោម៖",
    // News and Events Page
    "newsAndEvents.title": "ព្រឹត្តិការណ៍ឌីជីថលថ្មីៗ​ ទាំងក្នុងនិងក្រៅប្រទេស",
    "newsAndEvents.short_description":
      "ស្វែងយល់ពីព័ត៌មានថ្មីៗ សេចក្តីប្រកាស និងព្រឹត្តិការណ៍នាពេលខាងមុខពីកម្មវិធីរបស់យើង។ ចាប់ពី ការជោគជ័យរបស់សិស្ស រហូតដល់ ថ្ងៃផុតកំណត់នៃការដាក់ពាក្យ សិក្ខាសាលា និងវគ្គព័ត៌មាននានា នេះគឺជាកន្លែងដែលអ្នកនឹងស្វែងរកអ្វីគ្រប់យ៉ាងដែលកំពុងកើតឡើងនៅក្នុងបេសកកម្មរបស់យើងក្នុងការគាំទ្រការអប់រំឌីជីថលតាមរយៈ ប្រាក់កម្ចីនិស្សិតគ្មានការប្រាក់។",
    "newsAndEvents.readmore": "អានបន្ថែម",
    "newsAndEvents.no_posts":
      "បច្ចុប្បន្ន មិនទាន់មានព័ត៌មាន ឬព្រឹត្តិការណ៍អ្វីទេ។",
    "newsAndEvents.sub_title": "ព័ត៌មាន និងព្រឹត្តិការណ៍ថ្មីៗ",
    // CTA Buttons
    "btn.previous": "ទំព័រមុន",
    "btn.next": "ទំព័របន្ទាប់",
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
