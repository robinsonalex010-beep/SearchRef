/* Scores and calculators: one list, used by both the homepage and the search page.

   To add a tool, copy one of the lines below and change it:
     name   – what shows on the button
     about  – one short line on what it's for
     url    – where it goes
     source – who runs it
     tags   – words people might type when looking for it (lower case, space-separated)

   Licensed tools (QRISK, QFracture, FRAX and so on) are linked, never copied. */

window.GP_TOOLS = [
  { name: "QRISK3", about: "10-year cardiovascular risk", url: "https://qrisk.org", source: "ClinRisk",
    tags: "cardiovascular cvd heart attack stroke statin cholesterol lipids hypertension risk" },
  { name: "QDiabetes", about: "Risk of developing type 2 diabetes", url: "https://qdiabetes.org", source: "ClinRisk",
    tags: "diabetes prediabetes hba1c glucose risk" },
  { name: "QCancer", about: "Risk of undiagnosed cancer from symptoms", url: "https://qcancer.org", source: "ClinRisk",
    tags: "cancer malignancy weight loss referral 2ww suspected" },
  { name: "QFracture", about: "Risk of osteoporotic and hip fracture", url: "https://qfracture.org", source: "ClinRisk",
    tags: "fracture osteoporosis bone hip fragility" },
  { name: "FRAX", about: "10-year fracture probability", url: "https://frax.shef.ac.uk/FRAX/", source: "University of Sheffield",
    tags: "fracture osteoporosis bone dxa dexa bisphosphonate fragility menopause" },
  { name: "CHA₂DS₂-VASc", about: "Stroke risk in atrial fibrillation", url: "https://www.mdcalc.com/calc/801", source: "MDCalc",
    tags: "af atrial fibrillation stroke anticoagulation doac warfarin" },
  { name: "Wells (DVT)", about: "Pre-test probability of DVT", url: "https://www.mdcalc.com/calc/362", source: "MDCalc",
    tags: "dvt deep vein thrombosis leg calf swelling d-dimer clot" },
  { name: "Wells (PE)", about: "Pre-test probability of pulmonary embolism", url: "https://www.mdcalc.com/calc/115", source: "MDCalc",
    tags: "pe pulmonary embolism breathless breathlessness chest pain d-dimer clot" },
  { name: "PERC", about: "Rule out PE in low-risk patients", url: "https://www.mdcalc.com/calc/347", source: "MDCalc",
    tags: "pe pulmonary embolism rule out chest pain" },
  { name: "CURB-65", about: "Pneumonia severity", url: "https://www.mdcalc.com/calc/324", source: "MDCalc",
    tags: "pneumonia chest infection lrti severity admission crb-65" },
  { name: "FeverPAIN", about: "Streptococcal sore throat, NICE-recommended", url: "https://www.mdcalc.com/calc/3316", source: "MDCalc",
    tags: "sore throat tonsillitis pharyngitis strep streptococcal antibiotics" },
  { name: "Centor", about: "Streptococcal sore throat", url: "https://www.mdcalc.com/calc/104", source: "MDCalc",
    tags: "sore throat tonsillitis pharyngitis strep streptococcal antibiotics" },
  { name: "STOP-Bang", about: "Obstructive sleep apnoea screen", url: "https://www.mdcalc.com/calc/3992", source: "MDCalc",
    tags: "sleep apnoea apnea osa snoring tired tiredness" },
  { name: "Epworth", about: "Daytime sleepiness", url: "https://epworthsleepinessscale.com", source: "Official site",
    tags: "sleep sleepiness apnoea apnea osa tired tiredness driving dvla" },
  { name: "PHQ-9", about: "Depression severity", url: "https://www.mdcalc.com/calc/1725", source: "MDCalc",
    tags: "depression low mood mental health" },
  { name: "GAD-7", about: "Anxiety severity", url: "https://www.mdcalc.com/calc/1727", source: "MDCalc",
    tags: "anxiety worry panic mental health" },
  { name: "AUDIT / AUDIT-C", about: "Alcohol use screening", url: "https://www.gov.uk/government/publications/alcohol-use-screening-tests", source: "GOV.UK",
    tags: "alcohol drinking units" },
  { name: "eGFR (CKD-EPI)", about: "Estimated GFR", url: "https://www.mdcalc.com/calc/3939", source: "MDCalc",
    tags: "ckd kidney renal egfr gfr creatinine" },
  { name: "Creatinine clearance", about: "Cockcroft-Gault, for drug dosing", url: "https://www.mdcalc.com/calc/43", source: "MDCalc",
    tags: "creatinine clearance renal kidney dosing dose drug cockcroft" },
  { name: "Corrected calcium", about: "Calcium adjusted for albumin", url: "https://www.mdcalc.com/calc/31", source: "MDCalc",
    tags: "calcium albumin hypercalcaemia hypocalcaemia" },
  { name: "FIB-4", about: "Liver fibrosis risk", url: "https://www.mdcalc.com/calc/2200", source: "MDCalc",
    tags: "liver fibrosis nafld masld fatty lft alt" },
  { name: "Glasgow-Blatchford", about: "Upper GI bleed risk", url: "https://www.mdcalc.com/calc/518", source: "MDCalc",
    tags: "gi bleed bleeding haematemesis melaena upper" },
  { name: "Ottawa ankle", about: "Need for ankle or foot x-ray", url: "https://www.mdcalc.com/calc/1670", source: "MDCalc",
    tags: "ankle foot injury sprain x-ray xray fracture" },
  { name: "Canadian C-spine", about: "Need for neck imaging after trauma", url: "https://www.mdcalc.com/calc/696", source: "MDCalc",
    tags: "neck c-spine cervical spine injury trauma imaging" },
  { name: "Traffic light system", about: "Feverish illness in under 5s (NICE NG143)", url: "https://www.nice.org.uk/guidance/ng143", source: "NICE",
    tags: "fever feverish child children paediatric baby infant under sepsis" },
  { name: "All MDCalc tools", about: "Full calculator library", url: "https://www.mdcalc.com", source: "MDCalc",
    tags: "calculator calculators score scores" }
];

(function () {
  const STOP = new Set(["the", "and", "for", "with", "management", "guideline", "guidelines",
    "guidance", "treatment", "nice", "patient", "information", "adult", "adults", "dose", "dosing"]);

  function haystack(t) {
    return (t.name + " " + t.about + " " + t.tags).toLowerCase();
  }

  // Score each tool against a query; short words (dvt, af, osa) must match a whole word.
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
    a.target = "_blank";
    a.rel = "noopener";
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

  // Wire a filter box to a container: empty filter shows everything.
  window.gpToolFinder = function (input, container, withAbout) {
    const render = () => {
      const q = input.value.trim();
      const list = q ? window.gpToolMatches(q) : window.GP_TOOLS;
      container.replaceChildren(...list.map(t => window.gpToolLink(t, withAbout)));
      if (!list.length) {
        const none = document.createElement("span");
        none.className = "tool-none";
        none.textContent = "Nothing matches; try another word.";
        container.append(none);
      }
    };
    input.addEventListener("input", render);
    render();
  };
})();
