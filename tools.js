/* Scores, calculators and forms: one list, used by both the homepage and the search page.

   To add a tool, copy one of the lines below and change it:
     name   – what shows on the button
     about  – one short line on what it's for
     url    – where it goes (forms built for this site start with /forms/)
     source – who runs it
     group  – which heading it sits under on the homepage
     tags   – words people might type when looking for it (lower case, space-separated)

   Licensed tools (QRISK, QFracture, FRAX, Epworth and so on) are linked, never copied. */

window.GP_TOOL_GROUPS = [
  "Cardiovascular, diabetes and cancer risk",
  "Thrombosis",
  "Infection and respiratory",
  "Sleep",
  "Mental health and alcohol",
  "ADHD and autism",
  "Bone",
  "Kidney, liver and GI",
  "Injury",
  "Children",
  "Urology",
  "More"
];

window.GP_TOOLS = [
  { name: "QRISK3", about: "10-year cardiovascular risk", url: "https://qrisk.org", source: "ClinRisk",
    group: "Cardiovascular, diabetes and cancer risk",
    tags: "cardiovascular cvd heart attack stroke statin cholesterol lipids hypertension risk" },
  { name: "QDiabetes", about: "Risk of developing type 2 diabetes", url: "https://qdiabetes.org", source: "ClinRisk",
    group: "Cardiovascular, diabetes and cancer risk",
    tags: "diabetes prediabetes hba1c glucose risk" },
  { name: "QCancer", about: "Risk of undiagnosed cancer from symptoms", url: "https://qcancer.org", source: "ClinRisk",
    group: "Cardiovascular, diabetes and cancer risk",
    tags: "cancer malignancy weight loss referral 2ww suspected" },
  { name: "CHA₂DS₂-VASc", about: "Stroke risk in atrial fibrillation", url: "https://www.mdcalc.com/calc/801", source: "MDCalc",
    group: "Cardiovascular, diabetes and cancer risk",
    tags: "af atrial fibrillation stroke anticoagulation doac warfarin" },

  { name: "Wells (DVT)", about: "Pre-test probability of DVT", url: "https://www.mdcalc.com/calc/362", source: "MDCalc",
    group: "Thrombosis",
    tags: "dvt deep vein thrombosis leg calf swelling d-dimer clot" },
  { name: "Wells (PE)", about: "Pre-test probability of pulmonary embolism", url: "https://www.mdcalc.com/calc/115", source: "MDCalc",
    group: "Thrombosis",
    tags: "pe pulmonary embolism breathless breathlessness chest pain d-dimer clot" },
  { name: "PERC", about: "Rule out PE in low-risk patients", url: "https://www.mdcalc.com/calc/347", source: "MDCalc",
    group: "Thrombosis",
    tags: "pe pulmonary embolism rule out chest pain" },

  { name: "CURB-65", about: "Pneumonia severity", url: "https://www.mdcalc.com/calc/324", source: "MDCalc",
    group: "Infection and respiratory",
    tags: "pneumonia chest infection lrti severity admission crb-65" },
  { name: "FeverPAIN", about: "Streptococcal sore throat, NICE-recommended", url: "https://www.mdcalc.com/calc/3316", source: "MDCalc",
    group: "Infection and respiratory",
    tags: "sore throat tonsillitis pharyngitis strep streptococcal antibiotics" },
  { name: "Centor", about: "Streptococcal sore throat", url: "https://www.mdcalc.com/calc/104", source: "MDCalc",
    group: "Infection and respiratory",
    tags: "sore throat tonsillitis pharyngitis strep streptococcal antibiotics" },

  { name: "STOP-Bang", about: "Obstructive sleep apnoea screen", url: "https://www.mdcalc.com/calc/3992", source: "MDCalc",
    group: "Sleep",
    tags: "sleep apnoea apnea osa snoring tired tiredness" },
  { name: "Epworth", about: "Daytime sleepiness", url: "https://www.asthmaandlung.org.uk/conditions/obstructive-sleep-apnoea-osa/epworth-sleepiness-scale", source: "Asthma + Lung UK",
    group: "Sleep",
    tags: "sleep sleepiness apnoea apnea osa tired tiredness driving dvla" },

  { name: "PHQ-9", about: "Depression severity", url: "https://www.mdcalc.com/calc/1725", source: "MDCalc",
    group: "Mental health and alcohol",
    tags: "depression low mood mental health" },
  { name: "GAD-7", about: "Anxiety severity", url: "https://www.mdcalc.com/calc/1727", source: "MDCalc",
    group: "Mental health and alcohol",
    tags: "anxiety worry panic mental health" },
  { name: "AUDIT / AUDIT-C", about: "Alcohol use screening", url: "https://www.gov.uk/government/publications/alcohol-use-screening-tests", source: "GOV.UK",
    group: "Mental health and alcohol",
    tags: "alcohol drinking units" },

  { name: "SNAP-IV (18-item)", about: "Child ADHD rating scale for parents and teachers; fill in, score, print", url: "/forms/snap-iv/", source: "Form on this site",
    group: "ADHD and autism", internal: true,
    tags: "adhd add attention hyperactivity inattention child children school teacher parent snap screening" },
  { name: "Adult ADHD self-screen", about: "Adult screening questionnaire", url: "https://adhduk.co.uk/adult-adhd-screening-survey/", source: "ADHD UK",
    group: "ADHD and autism",
    tags: "adhd add attention adult screening asrs" },
  { name: "Right to Choose", about: "ADHD and autism assessment options and waits by area", url: "https://adhduk.co.uk/right-to-choose/", source: "ADHD UK",
    group: "ADHD and autism",
    tags: "adhd add autism asd referral assessment waiting right to choose" },

  { name: "FRAX", about: "10-year fracture probability", url: "https://frax.shef.ac.uk/FRAX/", source: "University of Sheffield",
    group: "Bone",
    tags: "fracture osteoporosis bone dxa dexa bisphosphonate fragility menopause" },
  { name: "QFracture", about: "Risk of osteoporotic and hip fracture", url: "https://qfracture.org", source: "ClinRisk",
    group: "Bone",
    tags: "fracture osteoporosis bone hip fragility" },

  { name: "eGFR (CKD-EPI)", about: "Estimated GFR", url: "https://www.mdcalc.com/calc/3939", source: "MDCalc",
    group: "Kidney, liver and GI",
    tags: "ckd kidney renal egfr gfr creatinine" },
  { name: "Creatinine clearance", about: "Cockcroft-Gault, for drug dosing", url: "https://www.mdcalc.com/calc/43", source: "MDCalc",
    group: "Kidney, liver and GI",
    tags: "creatinine clearance renal kidney dosing dose drug cockcroft" },
  { name: "Corrected calcium", about: "Calcium adjusted for albumin", url: "https://www.mdcalc.com/calc/31", source: "MDCalc",
    group: "Kidney, liver and GI",
    tags: "calcium albumin hypercalcaemia hypocalcaemia" },
  { name: "FIB-4", about: "Liver fibrosis risk", url: "https://www.mdcalc.com/calc/2200", source: "MDCalc",
    group: "Kidney, liver and GI",
    tags: "liver fibrosis nafld masld fatty lft alt" },
  { name: "Glasgow-Blatchford", about: "Upper GI bleed risk", url: "https://www.mdcalc.com/calc/518", source: "MDCalc",
    group: "Kidney, liver and GI",
    tags: "gi bleed bleeding haematemesis melaena upper" },

  { name: "Ottawa ankle", about: "Need for ankle or foot x-ray", url: "https://www.mdcalc.com/calc/1670", source: "MDCalc",
    group: "Injury",
    tags: "ankle foot injury sprain x-ray xray fracture" },
  { name: "Canadian C-spine", about: "Need for neck imaging after trauma", url: "https://www.mdcalc.com/calc/696", source: "MDCalc",
    group: "Injury",
    tags: "neck c-spine cervical spine injury trauma imaging" },

  { name: "Traffic light system", about: "Feverish illness in under 5s (NICE NG143)", url: "https://www.nice.org.uk/guidance/ng143", source: "NICE",
    group: "Children",
    tags: "fever feverish child children paediatric baby infant under sepsis" },

  { name: "IPSS", about: "Prostate symptom score (PDF)", url: "https://best.barnsleyccg.nhs.uk/media/xc3nrrmi/ipss-prostate-score.pdf", source: "Barnsley BEST",
    group: "Urology",
    tags: "prostate luts urinary symptoms bph ipss nocturia frequency flow" },

  { name: "All MDCalc tools", about: "Full calculator library", url: "https://www.mdcalc.com", source: "MDCalc",
    group: "More",
    tags: "calculator calculators score scores" }
];

(function () {
  const STOP = new Set(["the", "and", "for", "with", "management", "guideline", "guidelines",
    "guidance", "treatment", "nice", "patient", "information", "adult", "adults", "dose", "dosing"]);

  function haystack(t) {
    return (t.name + " " + t.about + " " + t.tags).toLowerCase();
  }

  // Score each tool against a query; short words (dvt, af, osa, add) must match a whole word.
  window.gpToolMatches = function (query, limit) {
    const words = (query || "").toLowerCase().split(/[^a-z0-9-]+/).filter(w => w && !STOP.has(w));
    if (!words.length) return [];
    return window.GP_TOOLS
      .map(t => {
        const hay = haystack(t);
        const tokens = hay.split(/[^a-z0-9-]+/);
        let score = 0;
        words.forEach(w => {
          if (w.length >= 4 ? hay.includes(w) : tokens.includes(w)) score++;
        });
        return { t, score };
      })
      .filter(x => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit || 99)
      .map(x => x.t);
  };

  window.gpToolLink = function (t, withAbout) {
    const a = document.createElement("a");
    a.href = t.url;
    if (!t.internal) {
      a.target = "_blank";
      a.rel = "noopener";
    }
    a.title = t.about + " (" + t.source + ")";
    if (withAbout) {
      const name = document.createElement("span");
      name.className = "tool-name";
      name.textContent = t.name;
      const about = document.createElement("span");
      about.className = "tool-about";
      about.textContent = t.about;
      a.append(name, about);
    } else {
      a.textContent = t.name;
    }
    return a;
  };

  function noneMessage() {
    const none = document.createElement("span");
    none.className = "tool-none";
    none.textContent = "Nothing matches; try another word.";
    return none;
  }

  // Wire a filter box to a container.
  // mode "grouped": headings and descriptions (homepage); otherwise compact buttons (sidebar).
  window.gpToolFinder = function (input, container, mode) {
    const grouped = mode === "grouped" || mode === true;
    const render = () => {
      const q = input.value.trim();
      if (!q && grouped) {
        const blocks = window.GP_TOOL_GROUPS.map(g => {
          const items = window.GP_TOOLS.filter(t => t.group === g);
          if (!items.length) return null;
          const div = document.createElement("div");
          div.className = "calc-group";
          const h = document.createElement("h3");
          h.textContent = g;
          div.append(h, ...items.map(t => window.gpToolLink(t, true)));
          return div;
        }).filter(Boolean);
        container.classList.add("is-grouped");
        container.replaceChildren(...blocks);
        return;
      }
      container.classList.remove("is-grouped");
      const list = q ? window.gpToolMatches(q) : window.GP_TOOLS;
      container.replaceChildren(...list.map(t => window.gpToolLink(t, grouped)));
      if (!list.length) container.append(noneMessage());
    };
    input.addEventListener("input", render);
    render();
  };
})();
