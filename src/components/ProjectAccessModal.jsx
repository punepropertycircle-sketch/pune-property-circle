import { useState } from "react";
import "./ProjectAccessModal.css";


const PROJECT_ACCESS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyFCoV02nymE0bVJvxnY7D8jvZmDRVrizXd-Oh4nLGjAonGWUXsa-rqHytL_j1GL9oAFw/exec";


/* =========================================
   COUNTRY LIST
========================================= */

const countries = [

  {
    name: "India",
    code: "+91",
    flag: "🇮🇳",
    digits: 10,
  },

  {
    name: "United States",
    code: "+1",
    flag: "🇺🇸",
    digits: 10,
  },

  {
    name: "Canada",
    code: "+1",
    flag: "🇨🇦",
    digits: 10,
  },

  {
    name: "United Kingdom",
    code: "+44",
    flag: "🇬🇧",
    digits: 10,
  },

  {
    name: "Australia",
    code: "+61",
    flag: "🇦🇺",
    digits: 9,
  },

  {
    name: "New Zealand",
    code: "+64",
    flag: "🇳🇿",
    digits: 9,
  },

  {
    name: "United Arab Emirates",
    code: "+971",
    flag: "🇦🇪",
    digits: 9,
  },

  {
    name: "Saudi Arabia",
    code: "+966",
    flag: "🇸🇦",
    digits: 9,
  },

  {
    name: "Qatar",
    code: "+974",
    flag: "🇶🇦",
    digits: 8,
  },

  {
    name: "Kuwait",
    code: "+965",
    flag: "🇰🇼",
    digits: 8,
  },

  {
    name: "Singapore",
    code: "+65",
    flag: "🇸🇬",
    digits: 8,
  },

  {
    name: "Malaysia",
    code: "+60",
    flag: "🇲🇾",
    digits: 9,
  },

  {
    name: "Germany",
    code: "+49",
    flag: "🇩🇪",
    digits: 10,
  },

  {
    name: "France",
    code: "+33",
    flag: "🇫🇷",
    digits: 9,
  },

  {
    name: "Italy",
    code: "+39",
    flag: "🇮🇹",
    digits: 10,
  },

  {
    name: "Spain",
    code: "+34",
    flag: "🇪🇸",
    digits: 9,
  },

  {
    name: "Netherlands",
    code: "+31",
    flag: "🇳🇱",
    digits: 9,
  },

  {
    name: "Switzerland",
    code: "+41",
    flag: "🇨🇭",
    digits: 9,
  },

  {
    name: "South Africa",
    code: "+27",
    flag: "🇿🇦",
    digits: 9,
  },

  {
    name: "Japan",
    code: "+81",
    flag: "🇯🇵",
    digits: 10,
  },

  {
    name: "South Korea",
    code: "+82",
    flag: "🇰🇷",
    digits: 10,
  },

  {
    name: "China",
    code: "+86",
    flag: "🇨🇳",
    digits: 11,
  },

  {
    name: "Hong Kong",
    code: "+852",
    flag: "🇭🇰",
    digits: 8,
  },

  {
    name: "Thailand",
    code: "+66",
    flag: "🇹🇭",
    digits: 9,
  },

  {
    name: "Indonesia",
    code: "+62",
    flag: "🇮🇩",
    digits: 10,
  },

  {
    name: "Philippines",
    code: "+63",
    flag: "🇵🇭",
    digits: 10,
  },

  {
    name: "Bangladesh",
    code: "+880",
    flag: "🇧🇩",
    digits: 10,
  },

  {
    name: "Nepal",
    code: "+977",
    flag: "🇳🇵",
    digits: 10,
  },

  {
    name: "Sri Lanka",
    code: "+94",
    flag: "🇱🇰",
    digits: 9,
  },

  {
    name: "Pakistan",
    code: "+92",
    flag: "🇵🇰",
    digits: 10,
  },

  {
    name: "Brazil",
    code: "+55",
    flag: "🇧🇷",
    digits: 11,
  },

  {
    name: "Mexico",
    code: "+52",
    flag: "🇲🇽",
    digits: 10,
  },

  {
    name: "Russia",
    code: "+7",
    flag: "🇷🇺",
    digits: 10,
  },

];


function ProjectAccessModal({
  project,
  onClose,
  onContinue,
}) {

  const [name, setName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  /* =========================================
     DEFAULT INDIA
  ========================================= */

  const [selectedCountry, setSelectedCountry] =
    useState(countries[0]);

  const [isSubmitting, setIsSubmitting] =
    useState(false);


  /* =========================================
     COUNTRY CHANGE
  ========================================= */

  const handleCountryChange = (e) => {

    const value =
      e.target.value;

    const [
      countryName,
      countryCode,
    ] =
      value.split("|");


    const country =
      countries.find(
        (item) =>
          item.name === countryName &&
          item.code === countryCode
      );


    if (country) {

      setSelectedCountry(country);

      setPhone("");

    }

  };


  /* =========================================
     PHONE CHANGE
  ========================================= */

  const handlePhoneChange = (e) => {

    const digits =
      e.target.value
        .replace(/\D/g, "");


    setPhone(
      digits.slice(
        0,
        selectedCountry.digits
      )
    );

  };


  /* =========================================
     SUBMIT
  ========================================= */

  const handleSubmit = async (e) => {

    e.preventDefault();


    if (isSubmitting) {
      return;
    }


    /* =========================================
       CLEAN DATA
    ========================================= */

    const cleanName =
      name.trim();

    const cleanPhone =
      phone.trim();


    /* =========================================
       NAME VALIDATION
    ========================================= */

    if (!cleanName) {

      alert(
        "Please enter your name."
      );

      return;

    }


    /* =========================================
       PHONE VALIDATION
    ========================================= */

    if (
      cleanPhone.length !==
      selectedCountry.digits
    ) {

      alert(
        `Please enter a valid ${selectedCountry.digits}-digit mobile number.`
      );

      return;

    }


    /* =========================================
       PROJECT
    ========================================= */

    const projectId =
      project?.id || "";

    const projectName =
      project?.name || "";

    const sheetProjectName =
      project?.sheetName ||
      projectName;


    /* =========================================
       FULL PHONE
    ========================================= */

    const fullPhone =
      `${selectedCountry.code} ${cleanPhone}`;


    /* =========================================
       GOOGLE SHEET PAYLOAD
    ========================================= */

    const payload = {

      name:
        cleanName,

      phone:
        fullPhone,

      email:
        "",

      /* USER-FACING NAME */
      project:
        projectName,

      projectId:
        projectId,

      accessType:
        "360 Project View",

      /* SHEET NAME */
      property:
        sheetProjectName,

      enquiryType:
        "360 Project View",

      country:
        selectedCountry.name,

      countryCode:
        selectedCountry.code,

      visitDate:
        "",

      message:
        `Visitor requested 360° access to ${projectName}.`,

    };


    try {

      setIsSubmitting(true);


      /* =========================================
         SEND TO GOOGLE SHEET
      ========================================= */

      await fetch(
        PROJECT_ACCESS_SCRIPT_URL,
        {
          method: "POST",

          mode: "no-cors",

          headers: {
            "Content-Type":
              "text/plain;charset=utf-8",
          },

          body:
            JSON.stringify(payload),

        }
      );


      /* =========================================
         ACCESS MARKER
      ========================================= */

      sessionStorage.setItem(
        "project360Project",
        projectId
      );

      sessionStorage.setItem(
        "project360AccessRequested",
        "true"
      );


      /* =========================================
         OPEN 360
      ========================================= */

      onContinue();


    } catch (error) {

      console.error(
        "Google Sheet error:",
        error
      );

      alert(
        "Something went wrong. Please try again."
      );

      setIsSubmitting(false);

    }

  };


  return (

    <div className="project-access-overlay">

      <div className="project-access-modal">


        {/* CLOSE */}

        <button
          className="project-access-close"
          onClick={onClose}
          type="button"
          aria-label="Close"
        >
          ×
        </button>


        <div className="project-access-content">


          {/* LABEL */}

          <p className="project-access-label">
            VIRTUAL PROPERTY TOUR
          </p>


          {/* TITLE */}

          <h2>

            Explore

            <span>
              {" "}
              {project?.name ||
                "Property"}
            </span>

          </h2>


          {/* DESCRIPTION */}

          <p className="project-access-description">

            Enter your details to access
            the 360° virtual tour.

          </p>


          {/* FORM */}

          <form
            onSubmit={handleSubmit}
          >


            {/* NAME */}

            <div className="project-access-group">

              <label
                htmlFor="project-name"
              >
                Full Name
              </label>


              <input
                id="project-name"
                type="text"
                value={name}
                onChange={(e) =>
                  setName(
                    e.target.value
                  )
                }
                placeholder="Enter your name"
                autoComplete="name"
                disabled={
                  isSubmitting
                }
                required
              />

            </div>


            {/* MOBILE */}

            <div className="project-access-group">

              <label
                htmlFor="project-phone"
              >
                Mobile Number
              </label>


              <div className="project-phone-row">


                {/* COUNTRY */}

                <select
                  className="project-country-select"

                  value={
                    `${selectedCountry.name}|${selectedCountry.code}`
                  }

                  onChange={
                    handleCountryChange
                  }

                  disabled={
                    isSubmitting
                  }

                  aria-label="Country code"
                >

                  {countries.map(
                    (country) => (

                      <option
                        key={`${country.name}-${country.code}`}
                        value={`${country.name}|${country.code}`}
                      >

                        {country.flag}{" "}
                        {country.name}{" "}
                        {country.code}

                      </option>

                    )
                  )}

                </select>


                {/* PHONE */}

                <input
                  id="project-phone"
                  className="project-phone-input"
                  type="tel"
                  value={phone}
                  onChange={
                    handlePhoneChange
                  }
                  placeholder={
                    `${selectedCountry.digits}-digit number`
                  }
                  inputMode="numeric"
                  autoComplete="tel"
                  maxLength={
                    selectedCountry.digits
                  }
                  disabled={
                    isSubmitting
                  }
                  required
                />

              </div>

            </div>


            {/* SUBMIT */}

            <button
              type="submit"
              className="project-access-button"
              disabled={
                isSubmitting
              }
            >

              {isSubmitting ? (

                <span>
                  Please wait...
                </span>

              ) : (

                <>

                  <span>
                    View 360° Tour
                  </span>

                  <strong>
                    →
                  </strong>

                </>

              )}

            </button>


          </form>


          {/* NOTE */}

          <p className="project-access-note">

            Your details are used to assist you
            with this property.

          </p>


        </div>

      </div>

    </div>

  );

}


export default ProjectAccessModal;