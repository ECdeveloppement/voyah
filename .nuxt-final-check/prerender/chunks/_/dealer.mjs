const t = (en, fr, ar) => ({ en, fr, ar });
const publicModelSlugs = ["Free", "Dream", "Passion", "Courage"];
const modelDisplayName = {
  "Free": t("VOYAH FREE", "VOYAH FREE", "VOYAH FREE"),
  "Dream": t("VOYAH DREAM", "VOYAH DREAM", "VOYAH DREAM"),
  "Passion": t("VOYAH PASSION", "VOYAH PASSION", "VOYAH PASSION"),
  "Courage": t("VOYAH COURAGE", "VOYAH COURAGE", "VOYAH COURAGE")
};
const modelKeyValue = {
  "Free": "VOYAH FREE",
  "Dream": "VOYAH DREAM",
  "Passion": "VOYAH PASSION",
  "Courage": "VOYAH COURAGE"
};
const choiceValues = (choices) => choices.map((choice) => choice.value);
const appointmentTitles = [
  { value: "Mr", label: t("Mr.", "M.", "\u0627\u0644\u0633\u064A\u062F") },
  { value: "Mrs", label: t("Mrs.", "Mme", "\u0627\u0644\u0633\u064A\u062F\u0629") },
  { value: "Ms", label: t("Ms.", "Mlle", "\u0627\u0644\u0622\u0646\u0633\u0629") }
];
const appointmentServiceTypes = [
  { value: "maintenance", label: t("Periodic maintenance", "Entretien p\xE9riodique", "\u0635\u064A\u0627\u0646\u0629 \u062F\u0648\u0631\u064A\u0629") },
  { value: "diagnostic", label: t("Diagnostics and warning lights", "Diagnostic et voyants", "\u062A\u0634\u062E\u064A\u0635 \u0648\u0645\u0624\u0634\u0631\u0627\u062A \u062A\u062D\u0630\u064A\u0631") },
  { value: "warranty-repair", label: t("Warranty repair", "R\xE9paration sous garantie", "\u0625\u0635\u0644\u0627\u062D \u0636\u0645\u0646 \u0627\u0644\u0636\u0645\u0627\u0646") },
  { value: "software", label: t("Software update", "Mise \xE0 jour logicielle", "\u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0628\u0631\u0645\u062C\u064A\u0627\u062A") },
  { value: "bodywork", label: t("Body and paint", "Carrosserie et peinture", "\u0647\u064A\u0643\u0644 \u0648\u062F\u0647\u0627\u0646") },
  { value: "other", label: t("Other request", "Autre demande", "\u0637\u0644\u0628 \u0622\u062E\u0631") }
];
const appointmentServiceLocations = [
  {
    value: "VOYAH SERVICE-TUNISIE",
    label: t("VOYAH SERVICE-TUNISIE", "VOYAH SERVICE-TUNISIE", "\u0641\u0648\u0627\u0647 \u0633\u064A\u0631\u0641\u0633 - \u062A\u0648\u0646\u0633")
  },
  {
    value: "AUTRE CENTRE",
    label: t("Another centre (to be confirmed)", "Autre centre (\xE0 confirmer)", "\u0645\u0631\u0643\u0632 \u0622\u062E\u0631 (\u0644\u0644\u062A\u0623\u0643\u064A\u062F)")
  }
];
const appointmentTimeSlots = Array.from({ length: 17 }, (_, index) => {
  const minutes = 9 * 60 + index * 30;
  const value = `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
  return { value, label: t(value, value, value) };
});
const quoteModels = [
  {
    value: "Dream",
    name: "VOYAH Dream",
    image: "/assets/quote/dream-card.webp",
    description: t("PHEV - Premium MPV\nPlug-in hybrid", "PHEV - Monospace premium\nHybride rechargeable", "PHEV - \u0633\u064A\u0627\u0631\u0629 \u0639\u0627\u0626\u0644\u064A\u0629 \u0641\u0627\u062E\u0631\u0629\n\u0647\u062C\u064A\u0646 \u0642\u0627\u0628\u0644 \u0644\u0644\u0634\u062D\u0646")
  },
  {
    value: "Courage",
    name: "VOYAH Courage",
    image: "/assets/quote/courage-card.webp",
    description: t("100% electric - Up to 476km\n(WLTP)", "100% \xE9lectrique - Jusqu\u2019\xE0 476km\n(WLTP)", "\u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0628\u0627\u0644\u0643\u0627\u0645\u0644 - \u062D\u062A\u0649 476 \u0643\u0645\n(WLTP)")
  },
  {
    value: "Free",
    name: "VOYAH Free",
    image: "/assets/quote/free-card.webp",
    description: t("REEV - Electric with a range\nextender", "REEV - \xC9lectrique avec prolongateur\nd\u2019autonomie", "REEV - \u0643\u0647\u0631\u0628\u0627\u0626\u064A\u0629 \u0645\u0639 \u0645\u0648\u0633\u0651\u0639\n\u0645\u062F\u0649 \u0627\u0644\u0633\u064A\u0631")
  }
];
const quoteCustomerTypes = [
  { value: "Particulier", label: t("Individual", "Particulier", "\u0641\u0631\u062F") },
  { value: "Soci\xE9t\xE9", label: t("Company", "Soci\xE9t\xE9", "\u0634\u0631\u0643\u0629") }
];
const quoteFinancingOptions = [
  { value: "Comptant", label: t("Cash", "Comptant", "\u0646\u0642\u062F\u0627\u064B") },
  { value: "Cr\xE9dit bancaire", label: t("Bank loan", "Cr\xE9dit bancaire", "\u0642\u0631\u0636 \u0628\u0646\u0643\u064A") },
  { value: "Leasing", label: t("Leasing", "Leasing", "\u0625\u064A\u062C\u0627\u0631 \u0645\u0627\u0644\u064A") }
];
const leadForms = {
  "test-drive": {
    title: t("Book a Test Drive", "Demander un essai", "\u0627\u062D\u062C\u0632 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629"),
    subject: t("Voyah \u2014 Test drive request", "Voyah \u2014 Demande d\u2019essai", "Voyah \u2014 \u0637\u0644\u0628 \u062A\u062C\u0631\u0628\u0629 \u0642\u064A\u0627\u062F\u0629"),
    success: t(
      "Your test drive request has been sent. Our team will contact you to confirm the appointment.",
      "Votre demande d\u2019essai a \xE9t\xE9 envoy\xE9e. Notre \xE9quipe vous contactera pour confirmer le rendez-vous.",
      "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u062A\u062C\u0631\u0628\u0629 \u0627\u0644\u0642\u064A\u0627\u062F\u0629. \u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0641\u0631\u064A\u0642\u0646\u0627 \u0644\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0645\u0648\u0639\u062F."
    ),
    fields: [
      { name: "name", label: t("Your Name", "Votre nom", "\u0627\u0644\u0627\u0633\u0645"), type: "text", required: true },
      { name: "email", label: t("E-mail", "E-mail", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"), type: "email", required: true },
      { name: "phone", label: t("Phone Number", "Num\xE9ro de t\xE9l\xE9phone", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"), type: "tel", required: true },
      { name: "model", label: t("Select Model", "Choisir un mod\xE8le", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0637\u0631\u0627\u0632"), type: "select", options: "models" },
      { name: "date", label: t("Preferred Date", "Date souhait\xE9e", "\u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0641\u0636\u0644"), type: "date", required: true },
      { name: "time", label: t("Preferred Time", "Heure souhait\xE9e", "\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u0641\u0636\u0644"), type: "time" }
    ]
  },
  quote: {
    title: t("Request your VOYAH quote", "Demandez votre devis VOYAH", "\u0627\u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631 VOYAH"),
    subject: t("Voyah \u2014 Quote request", "Voyah \u2014 Demande de devis", "Voyah \u2014 \u0637\u0644\u0628 \u0639\u0631\u0636 \u0633\u0639\u0631"),
    success: t("Your request has been sent.", "Votre demande est envoy\xE9e.", "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643."),
    fields: [
      { name: "model", label: t("Model", "Mod\xE8le", "\u0627\u0644\u0637\u0631\u0627\u0632"), type: "text", required: true, allowedValues: quoteModels.map((model) => model.value) },
      { name: "customerType", label: t("You are", "Vous \xEAtes", "\u0623\u0646\u062A"), type: "text", required: true, allowedValues: quoteCustomerTypes.map((option) => option.value) },
      { name: "name", label: t("Full name", "Nom et pr\xE9nom", "\u0627\u0644\u0627\u0633\u0645 \u0648\u0627\u0644\u0644\u0642\u0628"), type: "text", required: true },
      { name: "phone", label: t("Tel.", "T\xE9l.", "\u0627\u0644\u0647\u0627\u062A\u0641"), type: "tel", required: true },
      { name: "address", label: t("Address", "Adresse", "\u0627\u0644\u0639\u0646\u0648\u0627\u0646"), type: "text", required: true },
      { name: "city", label: t("City", "Ville", "\u0627\u0644\u0645\u062F\u064A\u0646\u0629"), type: "text", required: true },
      { name: "email", label: t("E-mail", "E-mail", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"), type: "email", required: true },
      { name: "consent", label: t("Contact consent", "Consentement de contact", "\u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629 \u0639\u0644\u0649 \u0627\u0644\u062A\u0648\u0627\u0635\u0644"), type: "text", required: true, allowedValues: ["Oui"] },
      { name: "financing", label: t("Financing method", "Mode de financement", "\u0637\u0631\u064A\u0642\u0629 \u0627\u0644\u062A\u0645\u0648\u064A\u0644"), type: "text", required: true, allowedValues: quoteFinancingOptions.map((option) => option.value) }
    ]
  },
  service: {
    title: t("Book a Service", "Prendre un rendez-vous", "\u062D\u062C\u0632 \u0645\u0648\u0639\u062F \u0635\u064A\u0627\u0646\u0629"),
    subject: t("Voyah \u2014 Service appointment", "Voyah \u2014 Demande de rendez-vous atelier", "Voyah \u2014 \u0637\u0644\u0628 \u0645\u0648\u0639\u062F \u0635\u064A\u0627\u0646\u0629"),
    success: t(
      "Your appointment request has been sent. Our after-sales team will confirm the slot by phone.",
      "Votre demande de rendez-vous a \xE9t\xE9 envoy\xE9e. Notre service apr\xE8s-vente confirme le cr\xE9neau par t\xE9l\xE9phone.",
      "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u0627\u0644\u0645\u0648\u0639\u062F. \u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0641\u0631\u064A\u0642 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639 \u0644\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0645\u0648\u0639\u062F \u0647\u0627\u062A\u0641\u064A\u0627\u064B."
    ),
    fields: [
      { name: "name", label: t("Your Name", "Votre nom", "\u0627\u0644\u0627\u0633\u0645"), type: "text", required: true },
      { name: "email", label: t("E-mail", "E-mail", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"), type: "email", required: true },
      { name: "phone", label: t("Phone Number", "Num\xE9ro de t\xE9l\xE9phone", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"), type: "tel", required: true },
      { name: "model", label: t("Select Model", "Choisir un mod\xE8le", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0637\u0631\u0627\u0632"), type: "select", options: "models" },
      { name: "date", label: t("Preferred Date", "Date souhait\xE9e", "\u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0641\u0636\u0644"), type: "date", required: true },
      { name: "time", label: t("Preferred Time", "Heure souhait\xE9e", "\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u0641\u0636\u0644"), type: "time" },
      {
        name: "message",
        label: t("Description", "Description du besoin", "\u0648\u0635\u0641 \u0627\u0644\u0627\u062D\u062A\u064A\u0627\u062C"),
        type: "textarea",
        placeholder: t(
          "Mileage, warning lights, requested intervention",
          "Kilom\xE9trage, voyants allum\xE9s, intervention souhait\xE9e",
          "\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0645\u0642\u0637\u0648\u0639\u0629\u060C \u0645\u0624\u0634\u0631\u0627\u062A \u0627\u0644\u062A\u062D\u0630\u064A\u0631\u060C \u0627\u0644\u062A\u062F\u062E\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628"
        )
      }
    ]
  },
  appointment: {
    title: t("Book an appointment", "Prenez rendez-vous", "\u0627\u062D\u062C\u0632 \u0645\u0648\u0639\u062F\u0627\u064B"),
    subject: t("Voyah \u2014 Service appointment", "Voyah \u2014 Demande de rendez-vous atelier", "Voyah \u2014 \u0637\u0644\u0628 \u0645\u0648\u0639\u062F \u0635\u064A\u0627\u0646\u0629"),
    success: t(
      "Your appointment request has been sent. Our after-sales team confirms the slot by phone.",
      "Votre demande de rendez-vous est envoy\xE9e. Notre service apr\xE8s-vente confirme le cr\xE9neau par t\xE9l\xE9phone.",
      "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628 \u0627\u0644\u0645\u0648\u0639\u062F. \u0633\u064A\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0643 \u0641\u0631\u064A\u0642 \u0645\u0627 \u0628\u0639\u062F \u0627\u0644\u0628\u064A\u0639 \u0644\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0645\u0648\u0639\u062F \u0647\u0627\u062A\u0641\u064A\u0627\u064B."
    ),
    fields: [
      {
        name: "title",
        label: t("Title", "Civilit\xE9", "\u0627\u0644\u0635\u0641\u0629"),
        type: "select",
        required: true,
        choices: appointmentTitles,
        allowedValues: choiceValues(appointmentTitles)
      },
      { name: "firstName", label: t("First Name", "Pr\xE9nom", "\u0627\u0644\u0627\u0633\u0645"), type: "text", required: true },
      { name: "lastName", label: t("Last Name", "Nom", "\u0627\u0644\u0644\u0642\u0628"), type: "text", required: true },
      { name: "email", label: t("E-mail", "E-mail", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"), type: "email", required: true },
      {
        name: "phone",
        label: t("Phone Number", "Num\xE9ro de t\xE9l\xE9phone", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"),
        type: "tel",
        required: true,
        placeholder: t("8 digits, without country code", "8 chiffres, sans indicatif", "8 \u0623\u0631\u0642\u0627\u0645 \u0628\u062F\u0648\u0646 \u0645\u0641\u062A\u0627\u062D \u0627\u0644\u062F\u0648\u0644\u0629")
      },
      { name: "model", label: t("Select Model", "Choisir un mod\xE8le", "\u0627\u062E\u062A\u0631 \u0627\u0644\u0637\u0631\u0627\u0632"), type: "select", options: "models", required: true },
      {
        name: "mileage",
        label: t("Current Mileage (km)", "Kilom\xE9trage actuel (km)", "\u0627\u0644\u0645\u0633\u0627\u0641\u0629 \u0627\u0644\u0645\u0642\u0637\u0648\u0639\u0629 (\u0643\u0645)"),
        type: "number"
      },
      {
        name: "serviceType",
        label: t("Service Type", "Type de service", "\u0646\u0648\u0639 \u0627\u0644\u062E\u062F\u0645\u0629"),
        type: "select",
        required: true,
        choices: appointmentServiceTypes,
        allowedValues: choiceValues(appointmentServiceTypes)
      },
      {
        name: "serviceLocation",
        label: t("Preferred Service Location", "Centre de service souhait\xE9", "\u0645\u0631\u0643\u0632 \u0627\u0644\u062E\u062F\u0645\u0629 \u0627\u0644\u0645\u0641\u0636\u0644"),
        type: "select",
        required: true,
        choices: appointmentServiceLocations,
        allowedValues: choiceValues(appointmentServiceLocations),
        defaultValue: "VOYAH SERVICE-TUNISIE"
      },
      { name: "date", label: t("Preferred Date", "Date souhait\xE9e", "\u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u0641\u0636\u0644"), type: "date", required: true },
      {
        name: "time",
        label: t("Preferred Time", "Heure souhait\xE9e", "\u0627\u0644\u0648\u0642\u062A \u0627\u0644\u0645\u0641\u0636\u0644"),
        type: "select",
        required: true,
        choices: appointmentTimeSlots,
        allowedValues: choiceValues(appointmentTimeSlots)
      }
    ]
  },
  contact: {
    title: t("Contact", "Contact", "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"),
    subject: t("Voyah \u2014 Contact message", "Voyah \u2014 Message de contact", "Voyah \u2014 \u0631\u0633\u0627\u0644\u0629 \u0627\u062A\u0635\u0627\u0644"),
    success: t(
      "Your message has been sent. Our team answers within one business day.",
      "Votre message a \xE9t\xE9 envoy\xE9. Notre \xE9quipe r\xE9pond sous un jour ouvr\xE9.",
      "\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062A\u0643. \u0633\u064A\u0631\u062F \u0639\u0644\u064A\u0643 \u0641\u0631\u064A\u0642\u0646\u0627 \u062E\u0644\u0627\u0644 \u064A\u0648\u0645 \u0639\u0645\u0644 \u0648\u0627\u062D\u062F."
    ),
    fields: [
      { name: "name", label: t("Your Name", "Votre nom", "\u0627\u0644\u0627\u0633\u0645"), type: "text", required: true },
      { name: "subject", label: t("Subject", "Objet", "\u0627\u0644\u0645\u0648\u0636\u0648\u0639"), type: "text", required: true },
      { name: "email", label: t("E-mail", "E-mail", "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A"), type: "email", required: true },
      { name: "phone_number", label: t("Phone Number", "Num\xE9ro de t\xE9l\xE9phone", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"), type: "tel", required: true },
      {
        name: "message",
        label: t("Message", "Message", "\u0627\u0644\u0631\u0633\u0627\u0644\u0629"),
        type: "textarea",
        required: true,
        placeholder: t("How can we help?", "Comment pouvons-nous vous aider ?", "\u0643\u064A\u0641 \u064A\u0645\u0643\u0646\u0646\u0627 \u0645\u0633\u0627\u0639\u062F\u062A\u0643\u061F")
      }
    ]
  }
};

export { modelDisplayName as a, leadForms as l, modelKeyValue as m, publicModelSlugs as p };
//# sourceMappingURL=dealer.mjs.map
