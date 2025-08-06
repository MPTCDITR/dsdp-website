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
    // About Us
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

    //About Team
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
    // Event Carousel
    "home.event_1.title": "Signing Ceremony with DSDP",
    "home.event_1.description":
      "The DSDP is honored to announce to the public that, as decided by the Royal Government, the DSDP will organize the 'National Science, Technology, and Digital Day' annually. For the year 2023, it will be held at the Sokha Angkor Hotel in Siem Reap Province.",
    "home.event_2.title": "Digital Exhibition by DSDP",
    "home.event_2.description":
      "The DSDP is honored to announce to the public that, as decided by the Royal Government, the DSDP will organize the 'National Science, Technology, and Digital Day' annually. For the year 2023, it will be held at the Sokha Angkor Hotel in Siem Reap Province.",
    "home.event_3.title": "women for digital DSDP",
    "home.event_3.description":
      "The DSDP is honored to announce to the public that, as decided by the Royal Government, the DSDP will organize the 'National Science, Technology, and Digital Day' annually. For the year 2023, it will be held at the Sokha Angkor Hotel in Siem Reap Province.",
    // candidate benefits
    "home.candidate_benefits.title": "Benefits for DSDP Candidates",
    "home.candidate_benefits.description":
      "After being selected as a DSDP candidate, candidates will receive numerous benefits, including:",
    // Partnership Section
    "home.partnership.title": "Our Partners",
    "home.partnership.description":
      "DSDP is continuously seeking and signing MOUs with public and private educational institutions to expand the program's reach across the country.",
    "home.partnership.box.title": "Want to become a DSDP partner?",
    "home.partnership.box.description":
      " If you or your institution is interested in becoming a partner of DSDP, please click the button below to contact us.",
    // How to Apply Page
    "howToApply.title-1": "ជំហានងាយៗនៃការដាក់ពាក្យ",
    "howToApply.title-2": "ស្នើសុំថវិកាគម្រោងរបស់ ក.អ.ជ.ឌ.",
    "howToApply.subTitle":
      "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ផ្តល់ឱកាសដល់ សិស្ស និស្សិត និង មន្ត្រីរាជការ  ដែលបំពេញលក្ខខណ្ឌដូចខាងក្រោម ៖",
    "howToApply.studentTab": "សម្រាប់សិស្ស-និស្សិត",
    "howToApply.officerTab": "សម្រាប់មន្ត្រីរាជការ",
    "howToApply.quantity1": "ចំនួន ០១ ច្បាប់",
    "howToApply.quantity2": "ចំនួន ០២ ច្បាប់",
    // How to Apply Page (Student Criteria)
    "howToApply.student.condition1.title":
      "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    "howToApply.student.condition1.description":
      "បេក្ខជនត្រូវមានលក្ខខណ្ឌតម្រូវដូចខាងក្រោម ៖",
    "howToApply.student.condition1.item1": "ត្រូវមានសញ្ជាតិខ្មែរ",
    "howToApply.student.condition1.item2":
      "ទទួលបានសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល ដែលមាននិន្ទេសរួម A B ឬ C",
    "howToApply.student.condition1.item3":
      "ជាបេក្ខជនដែលបានបំពេញគ្រប់លក្ខខណ្ឌនៃការជ្រើសរើសឱ្យចុះឈ្មោះចូលរៀននៅតាមគ្រឹះស្ថានជាដៃគូទាំងអស់របស់ ក.អ.ជ.ឌ.",
    "howToApply.student.condition1.item4":
      "អាចឆ្លងកាត់ការប្រលង និង/ឬ ការសម្ភាស ដែលរៀបចំដោយ ក.អ.ជ.ឌ.",
    "howToApply.student.condition1.item5":
      "ត្រូវបានលើកទឹកចិត្តចំពោះបេក្ខជនមានជីវភាពក្រីក្រមកពីជនបទដាច់ស្រយាល ជាជនមានពិការភាព ជានារី",
    "howToApply.student.condition2.title":
      "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    "howToApply.student.condition2.description":
      "បេក្ខជនត្រូវស្កេនភ្ជាប់មកជាមួយនូវឯកសារយោងនៅពេលបំពេញពាក្យស្នើសុំតាមប្រព័ន្ធអនឡាញរួមមាន ៖",
    "howToApply.student.condition2.item1": "រូបថត ៤x៦ ផ្ទៃស",
    "howToApply.student.condition2.item2":
      "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល",
    "howToApply.student.condition2.item3":
      "អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ឬសំបុត្រកំណើត",
    "howToApply.student.condition2.item4": "សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ",
    "howToApply.student.condition3.title":
      "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    "howToApply.student.condition3.description":
      "បេក្ខជនដែលត្រូវបានជ្រើសរើសជាប់ជាស្ថាពរត្រូវមកបង្ហាញខ្លួន និងភ្ជាប់មកជាមួយនូវឯកសារតម្រូវរួមមាន ៖",
    "howToApply.student.condition3.item1":
      "1. ជីវប្រវត្តិសង្ខេបមានបិទរូបថត(រូបថត ៤x៦ ផ្ទៃ២)",
    "howToApply.student.condition3.item2":
      "2. កិច្ចព្រមព្រៀងស្តីពីការផ្តល់ថវិកាសិក្សាសម្រាប់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល",
    "howToApply.student.condition3.item3":
      "3. លិខិតធានាអះអាងពីអាណាព្យាបាល ឬសហព័ទ្ធ",
    "howToApply.student.condition3.item4":
      "4. សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល (មានឃ្យូ.អ.កូដ ស្តង់ដា ឬបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.student.condition3.item5":
      "5. អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.student.condition3.item6": "6. សេចក្តីចម្លងសំបុត្របញ្ជាក់កំណើត",
    "howToApply.student.condition3.item7":
      "7. សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    // How to Apply Page (Officer Criteria)
    "howToApply.officer.condition1.title":
      "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    "howToApply.officer.condition1.description":
      "បេក្ខជនត្រូវមានលក្ខខណ្ឌតម្រូវដូចខាងក្រោម ៖",
    "howToApply.officer.condition1.item1": "ត្រូវមានសញ្ជាតិខ្មែរ",
    "howToApply.officer.condition1.item2":
      "ទទួលបានសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល ដែលមាននិន្ទេសរួម A B ឬ C",
    "howToApply.officer.condition1.item3":
      "ជាបេក្ខជនដែលបានបំពេញគ្រប់លក្ខខណ្ឌនៃការជ្រើសរើសឱ្យចុះឈ្មោះចូលរៀននៅតាមគ្រឹះស្ថានជាដៃគូទាំងអស់របស់ ក.អ.ជ.ឌ.",
    "howToApply.officer.condition1.item4":
      "អាចឆ្លងកាត់ការប្រលង និង/ឬ ការសម្ភាស ដែលរៀបចំដោយ ក.អ.ជ.ឌ.",
    "howToApply.officer.condition1.item5":
      "ត្រូវបានលើកទឹកចិត្តចំពោះបេក្ខជនមានជីវភាពក្រីក្រមកពីជនបទដាច់ស្រយាល ជាជនមានពិការភាព ជានារី",
    "howToApply.officer.condition2.title":
      "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    "howToApply.officer.condition2.description":
      "បេក្ខជនត្រូវស្កេនភ្ជាប់មកជាមួយនូវឯកសារយោងនៅពេលបំពេញពាក្យស្នើសុំតាមប្រព័ន្ធអនឡាញរួមមាន ៖",
    "howToApply.officer.condition2.item1": "រូបថត ៤x៦ ផ្ទៃស",
    "howToApply.officer.condition2.item2":
      "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល",
    "howToApply.officer.condition2.item3":
      "អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ឬសំបុត្រកំណើត",
    "howToApply.officer.condition2.item4": "សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ",
    "howToApply.officer.condition3.title":
      "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    "howToApply.officer.condition3.description":
      "បេក្ខជនដែលត្រូវបានជ្រើសរើសជាប់ជាស្ថាពរត្រូវមកបង្ហាញខ្លួន និងភ្ជាប់មកជាមួយនូវឯកសារតម្រូវរួមមាន ៖",
    "howToApply.officer.condition3.item1":
      "1. ជីវប្រវត្តិសង្ខេបមានបិទរូបថត(រូបថត ៤x៦ ផ្ទៃ២)",
    "howToApply.officer.condition3.item2":
      "2. កិច្ចព្រមព្រៀងស្តីពីការផ្តល់ថវិកាសិក្សាសម្រាប់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល",
    "howToApply.officer.condition3.item3":
      "3. លិខិតធានាអះអាងពីអាណាព្យាបាល ឬសហព័ទ្ធ",
    "howToApply.officer.condition3.item4":
      "4. សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល (មានឃ្យូ.អ.កូដ ស្តង់ដា ឬបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.officer.condition3.item5":
      "5. អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.officer.condition3.item6": "6. សេចក្តីចម្លងសំបុត្របញ្ជាក់កំណើត",
    "howToApply.officer.condition3.item7":
      "7. សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    // Contact Page
    // Info section
    "contact.title.1": "Contact Information",
    "contact.description.1":
      "Please complete the form on the right to contact the N.S.D.P Working Group. We will respond within 24 hours. Or contact us directly at the following phone number:",
    "contact.description.2": "(+855) 12 345 678 | 12 45 678 | 12 34 567",
    "contact.description.3": "info@dsdp.gov.kh | partners@dsdp.gov.kh",
    "contact.description.4":
      "Building No. 13, Preah Monivong Boulevard, Sangkat Sra Chak, Khan Daun Penh Phnom Penh 120210, Cambodia",
    // Media Part
    "contact.title.2": "Location in Google Map",
    // News and Events Page
    "newsAndEvents.title":
      "Latest Digital Events, Both Local and International",
    "newsAndEvents.short_description":
      "Discover the latest news, announcements, and upcoming events from our programs. From student success stories to application deadlines, workshops, and informational sessions, this is where you'll find everything happening in our mission to support digital education through interest-free student loans.",
    "newsAndEvents.readmore": "Read More",
    "newsAndEvents.no_posts": "There's no News & Events at the moment.",
    "newsAndEvents.sub_title": "News & Events",
    // Video and Media Page
    "video-media.title": "Videos & Media",
    "video-media.description":
      "Enjoy our Digital Skill Development Program (DSDP) videos! Join us in fostering digital literacy and skills among students, preparing them for the digital age.",
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
    // About Us
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
    //About Team
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
    // Event Carousel
    "home.event_1.title": "កម្មវិធីចុះអនុស្សរណៈជាមួយ",
    "home.event_1.description":
      "ក.អ.ជ.ឌ. មានកិត្តិយសសូមគោរពជម្រាបជូន ដំណឹងដល់សាធារណជនទូទៅមេត្តាជ្រាបថា៖ តាមការសម្រេចរបស់រាជរដ្ឋាភិបាល ក.អ.ជ.ឌ. នឹងកំណត់ការរៀបចំ «ទិវាជាតិវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា និងឌីជីថល» ជាប្រចាំឆ្នាំ។ សម្រាប់ឆ្នាំ ២០២៣នេះនឹងត្រូវបានរៀបចំឡើងនៅសណ្ឋាគារ សុខាអង្គរ ខេត្តសៀមរាប",
    "home.event_2.title": "កម្មវិធីពិព័រឌីជីថលរបស់ ក.អ.ជ.ឌ",
    "home.event_2.description":
      "ក.អ.ជ.ឌ. មានកិត្តិយសសូមគោរពជម្រាបជូន ដំណឹងដល់សាធារណជនទូទៅមេត្តាជ្រាបថា៖ តាមការសម្រេចរបស់រាជរដ្ឋាភិបាល ក.អ.ជ.ឌ. នឹងកំណត់ការរៀបចំ «ទិវាជាតិវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា និងឌីជីថល» ជាប្រចាំឆ្នាំ។ សម្រាប់ឆ្នាំ ២០២៣នេះនឹងត្រូវបានរៀបចំឡើងនៅសណ្ឋាគារ សុខាអង្គរ ខេត្តសៀមរាប",
    "home.event_3.title": "កម្មវិធីស្រ្តីដើម្បីជីជីថល ក.អ.ជ.ឌ",
    "home.event_3.description":
      "ក.អ.ជ.ឌ. មានកិត្តិយសសូមគោរពជម្រាបជូន ដំណឹងដល់សាធារណជនទូទៅមេត្តាជ្រាបថា៖ តាមការសម្រេចរបស់រាជរដ្ឋាភិបាល ក.អ.ជ.ឌ. នឹងកំណត់ការរៀបចំ «ទិវាជាតិវិទ្យាសាស្ត្រ បច្ចេកវិទ្យា និងឌីជីថល» ជាប្រចាំឆ្នាំ។ សម្រាប់ឆ្នាំ ២០២៣នេះនឹងត្រូវបានរៀបចំឡើងនៅសណ្ឋាគារ សុខាអង្គរ ខេត្តសៀមរាប",
    // candidate benefits
    "home.candidate_benefits.title": "អត្ថប្រយោជន៍សម្រាប់បេក្ខជន ក.អ.ជ.ឌ",
    "home.candidate_benefits.description":
      "ក្រោយពីបានជាប់ជាស្ថាពរជាមួយ ក.អ.ជ.ឌ. បេក្ខជននឹងទទួលបានអត្ថប្រយោជន៍យ៉ាងច្រើនដូចជា៖",
    // Partnership Section
    "home.partnership.title": "គ្រឹះស្ថានឧត្តមសិក្សាជាដៃគូរបស់យើង",
    "home.partnership.description":
      " ក.អ.ជ.ឌ. បាននឹងកំពុងបន្តស្វែងរក និង ចុះអនុស្សរណៈជាមួយគ្រឹះស្ថានសិក្សាសាធារណៈ និងឯកជនក្នុងគោលបំណងពង្រីកវិសាលភាពនៃគម្រោងឱ្យកាន់តែទូលំទូលាយពេញផ្ទៃប្រទេស",
    "home.partnership.box.title": "ចង់ក្លាយជាដៃគូសហការរបស់ ក.អ.ជ.ឌ. ដែរឬទេ?",
    "home.partnership.box.description":
      "ប្រសិនបើលោកអ្នក ឬគ្រឺះស្ថានរបស់លោកអ្នក មានបំណងចង់ក្លាយជាដៃគូសហការជាមួយ ក.អ.ជ.ឌ. សូមចុចប៊ូតុងខាងក្រោមនេះដើម្បីទំនាក់ទំនងមកយើងខ្ញុំ",
    // How to Apply Page
    "howToApply.title-1": "ជំហានងាយៗនៃការដាក់ពាក្យ",
    "howToApply.title-2": "ស្នើសុំថវិកាគម្រោងរបស់ ក.អ.ជ.ឌ.",
    "howToApply.subTitle":
      "កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល ផ្តល់ឱកាសដល់ សិស្ស និស្សិត និង មន្ត្រីរាជការ  ដែលបំពេញលក្ខខណ្ឌដូចខាងក្រោម ៖",
    "howToApply.studentTab": "សម្រាប់សិស្ស-និស្សិត",
    "howToApply.officerTab": "សម្រាប់មន្ត្រីរាជការ",
    "howToApply.quantity1": "ចំនួន ០១ ច្បាប់",
    "howToApply.quantity2": "ចំនួន ០២ ច្បាប់",
    // How to Apply Page (Student Criteria)
    "howToApply.student.condition1.title":
      "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    "howToApply.student.condition1.description":
      "បេក្ខជនត្រូវមានលក្ខខណ្ឌតម្រូវដូចខាងក្រោម ៖",
    "howToApply.student.condition1.item1": "ត្រូវមានសញ្ជាតិខ្មែរ",
    "howToApply.student.condition1.item2":
      "ទទួលបានសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល ដែលមាននិន្ទេសរួម A B ឬ C",
    "howToApply.student.condition1.item3":
      "ជាបេក្ខជនដែលបានបំពេញគ្រប់លក្ខខណ្ឌនៃការជ្រើសរើសឱ្យចុះឈ្មោះចូលរៀននៅតាមគ្រឹះស្ថានជាដៃគូទាំងអស់របស់ ក.អ.ជ.ឌ.",
    "howToApply.student.condition1.item4":
      "អាចឆ្លងកាត់ការប្រលង និង/ឬ ការសម្ភាស ដែលរៀបចំដោយ ក.អ.ជ.ឌ.",
    "howToApply.student.condition1.item5":
      "ត្រូវបានលើកទឹកចិត្តចំពោះបេក្ខជនមានជីវភាពក្រីក្រមកពីជនបទដាច់ស្រយាល ជាជនមានពិការភាព ជានារី",
    "howToApply.student.condition2.title":
      "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    "howToApply.student.condition2.description":
      "បេក្ខជនត្រូវស្កេនភ្ជាប់មកជាមួយនូវឯកសារយោងនៅពេលបំពេញពាក្យស្នើសុំតាមប្រព័ន្ធអនឡាញរួមមាន ៖",
    "howToApply.student.condition2.item1": "រូបថត ៤x៦ ផ្ទៃស",
    "howToApply.student.condition2.item2":
      "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល",
    "howToApply.student.condition2.item3":
      "អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ឬសំបុត្រកំណើត",
    "howToApply.student.condition2.item4": "សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ",
    "howToApply.student.condition3.title":
      "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    "howToApply.student.condition3.description":
      "បេក្ខជនដែលត្រូវបានជ្រើសរើសជាប់ជាស្ថាពរត្រូវមកបង្ហាញខ្លួន និងភ្ជាប់មកជាមួយនូវឯកសារតម្រូវរួមមាន ៖",
    "howToApply.student.condition3.item1":
      "1. ជីវប្រវត្តិសង្ខេបមានបិទរូបថត(រូបថត ៤x៦ ផ្ទៃ២)",
    "howToApply.student.condition3.item2":
      "2. កិច្ចព្រមព្រៀងស្តីពីការផ្តល់ថវិកាសិក្សាសម្រាប់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល",
    "howToApply.student.condition3.item3":
      "3. លិខិតធានាអះអាងពីអាណាព្យាបាល ឬសហព័ទ្ធ",
    "howToApply.student.condition3.item4":
      "4. សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល (មានឃ្យូ.អ.កូដ ស្តង់ដា ឬបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.student.condition3.item5":
      "5. អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.student.condition3.item6": "6. សេចក្តីចម្លងសំបុត្របញ្ជាក់កំណើត",
    "howToApply.student.condition3.item7":
      "7. សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    // How to Apply Page (Officer Criteria)
    "howToApply.officer.condition1.title":
      "លក្ខខណ្ឌទី១៖ លក្ខខណ្ឌតម្រូវមូលដ្ឋាន",
    "howToApply.officer.condition1.description":
      "បេក្ខជនត្រូវមានលក្ខខណ្ឌតម្រូវដូចខាងក្រោម ៖",
    "howToApply.officer.condition1.item1": "ត្រូវមានសញ្ជាតិខ្មែរ",
    "howToApply.officer.condition1.item2":
      "ទទួលបានសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល ដែលមាននិន្ទេសរួម A B ឬ C",
    "howToApply.officer.condition1.item3":
      "ជាបេក្ខជនដែលបានបំពេញគ្រប់លក្ខខណ្ឌនៃការជ្រើសរើសឱ្យចុះឈ្មោះចូលរៀននៅតាមគ្រឹះស្ថានជាដៃគូទាំងអស់របស់ ក.អ.ជ.ឌ.",
    "howToApply.officer.condition1.item4":
      "អាចឆ្លងកាត់ការប្រលង និង/ឬ ការសម្ភាស ដែលរៀបចំដោយ ក.អ.ជ.ឌ.",
    "howToApply.officer.condition1.item5":
      "ត្រូវបានលើកទឹកចិត្តចំពោះបេក្ខជនមានជីវភាពក្រីក្រមកពីជនបទដាច់ស្រយាល ជាជនមានពិការភាព ជានារី",
    "howToApply.officer.condition2.title":
      "លក្ខខណ្ឌទី២៖ សំណុំលិខិតភ្ជាប់នៅពេលបំពេញពាក្យចុះឈ្មោះស្នើសុំដំបូង",
    "howToApply.officer.condition2.description":
      "បេក្ខជនត្រូវស្កេនភ្ជាប់មកជាមួយនូវឯកសារយោងនៅពេលបំពេញពាក្យស្នើសុំតាមប្រព័ន្ធអនឡាញរួមមាន ៖",
    "howToApply.officer.condition2.item1": "រូបថត ៤x៦ ផ្ទៃស",
    "howToApply.officer.condition2.item2":
      "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល",
    "howToApply.officer.condition2.item3":
      "អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ឬសំបុត្រកំណើត",
    "howToApply.officer.condition2.item4": "សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ",
    "howToApply.officer.condition3.title":
      "លក្ខខណ្ឌទី៣៖ សំណុំលិខិតភ្ជាប់នៅក្រោយពេលជាប់ជាស្ថាពរ",
    "howToApply.officer.condition3.description":
      "បេក្ខជនដែលត្រូវបានជ្រើសរើសជាប់ជាស្ថាពរត្រូវមកបង្ហាញខ្លួន និងភ្ជាប់មកជាមួយនូវឯកសារតម្រូវរួមមាន ៖",
    "howToApply.officer.condition3.item1":
      "1. ជីវប្រវត្តិសង្ខេបមានបិទរូបថត(រូបថត ៤x៦ ផ្ទៃ២)",
    "howToApply.officer.condition3.item2":
      "2. កិច្ចព្រមព្រៀងស្តីពីការផ្តល់ថវិកាសិក្សាសម្រាប់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល",
    "howToApply.officer.condition3.item3":
      "3. លិខិតធានាអះអាងពីអាណាព្យាបាល ឬសហព័ទ្ធ",
    "howToApply.officer.condition3.item4":
      "4. សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ ឬវិញ្ញាបនបត្របណ្តោះអាសន្នមធ្យមសិក្សាទុតិយភូមិ ឬសញ្ញាបត្រសមមូល (មានឃ្យូ.អ.កូដ ស្តង់ដា ឬបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.officer.condition3.item5":
      "5. អត្តសញ្ញាណប័ណ្ណ ឬលិខិតឆ្លងដែន ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    "howToApply.officer.condition3.item6": "6. សេចក្តីចម្លងសំបុត្របញ្ជាក់កំណើត",
    "howToApply.officer.condition3.item7":
      "7. សៀវភៅគ្រួសារ ឬសៀវភៅស្នាក់នៅ ច្បាប់ថតចម្លង (មានបញ្ជាក់ត្រឹមត្រូវ)",
    // Contact Page
    // Info section
    "contact.title.1": "ព័ត៌មានទំនាក់ទំនង",
    "contact.description.1":
      "សូមបំពេញទម្រង់ខាងស្តាំនេះ ដើម្បធ្វើទំនាក់ទំនងមកកាន់ក្រុមការ ងារ ក.អ.ជ.ឌ.។ យើងនឹងឆ្លើយតបទៅវិញក្នុងរយៈពេលមិនលើសពី ២៤ម៉ោង។ ឬទំនាក់ទំនងផ្ទាល់មកកាន់លេខទូរស័ព្ទខាងក្រោមនេះ ៖",
    "contact.description.2": "(+855) 12 345 678 | 12 45 678 | 12 34 567",
    "contact.description.3": "info@dsdp.gov.kh | partners@dsdp.gov.kh",
    "contact.description.4":
      "អគារលេខ ១៣ មហាវិថីព្រះមុនីវង្ស សង្កាត់ស្រះចក ខណ្ឌដូនពេញ រាជធានីភ្នំពេញ 120210, កម្ពុជា",
    // Media Part
    "contact.title.2": "ទីតាំងលើ Google Map",
    // News and Events Page
    "newsAndEvents.title": "ព្រឹត្តិការណ៍ឌីជីថលថ្មីៗ​ ទាំងក្នុងនិងក្រៅប្រទេស",
    "newsAndEvents.short_description":
      "ស្វែងយល់ពីព័ត៌មានថ្មីៗ សេចក្តីប្រកាស និងព្រឹត្តិការណ៍នាពេលខាងមុខពីកម្មវិធីរបស់យើង។ ចាប់ពី ការជោគជ័យរបស់សិស្ស រហូតដល់ ថ្ងៃផុតកំណត់នៃការដាក់ពាក្យ សិក្ខាសាលា និងវគ្គព័ត៌មាននានា នេះគឺជាកន្លែងដែលអ្នកនឹងស្វែងរកអ្វីគ្រប់យ៉ាងដែលកំពុងកើតឡើងនៅក្នុងបេសកកម្មរបស់យើងក្នុងការគាំទ្រការអប់រំឌីជីថលតាមរយៈ ប្រាក់កម្ចីនិស្សិតគ្មានការប្រាក់។",
    "newsAndEvents.readmore": "អានបន្ថែម",
    "newsAndEvents.no_posts":
      "បច្ចុប្បន្ន មិនទាន់មានព័ត៌មាន ឬព្រឹត្តិការណ៍អ្វីទេ។",
    "newsAndEvents.sub_title": "ព័ត៌មាន និងព្រឹត្តិការណ៍ថ្មីៗ",
    // Video and Media Page
    "video-media.title": "វីដេអូ និង ការផ្សព្វផ្សាយ",
    "video-media.description":
      "សូមរីករាយជាមួយវីដេអូរបស់កម្មវិធីអភិវឌ្ឍន៍ជំនាញឌីជីថល (DSDP) របស់យើង! ចូលរួមជាមួយយើងក្នុងការលើកកម្ពស់ចំណេះដឹង និងជំនាញឌីជីថលក្នុងចំណោមសិស្ស ដោយរៀបចំពួកគេសម្រាប់យុគសម័យឌីជីថល។",
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
