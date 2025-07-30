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
