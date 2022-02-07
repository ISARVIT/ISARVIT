export function dbExample(){
    const andreis_avatar = 'https://andreispurim.github.io/images/andreis.jpg';
    const katia_avatar = 'https://i1.rgstatic.net/ii/profile.image/278835607162910-1443490997982_Q512/Katia-Purim.jpg'
    const joel_avatar = 'https://api-isarvit.herokuapp.com/static/images/joel.png'
    const urology_preview = 'http://services.epnet.com/getimage.aspx?imageiid=7432'
    const respiratory_preview = 'https://www.researchgate.net/profile/John-Magnussen/publication/13354345/figure/fig2/AS:601775111409672@1520485775964/Lung-scan-in-eight-standard-views-of-8-mm3-block-sizes-involving-42-of-lung-tissue-In.png'
    const dermatology_preview = 'https://i1.rgstatic.net/publication/309433994_Hydroxyurea_and_nonmelanoma_skin_cancers_Report_of_three_cases_and_review_of_the_literature/links/5810e8a408aef2ef97b2d07c/largepreview.png'
    return {
      "qforms": 6,
      "rows": [
          {
              "editable": false,
              "id": 0,
              "name": "Urologie/Lithiase",
              "last_updated": "2021-12-17T02:24:00.000Z",
              "field": "Urologie",
              "creator": "Andreis PURIM",
              "preview": "http://services.epnet.com/getimage.aspx?imageiid=7432",
              "creator_avatar": "https://andreispurim.github.io/images/andreis.jpg",
              "dynamic_image": true,
              "creator_id": 1201,
              "keywords": [
                  "Urology",
                  "CR"
              ],
              "questions": 17,
              "uses": 15,
              "description": "This is a complete urology report made in 2020 for all urology based-scans used by the CHU Lille.",
              "paragraph": "This is a complete urology report made in 2020 for all urology based-scans used by the CHU Lille."
          },
          {
              "editable": false,
              "id": 1,
              "name": "Respiratoire",
              "last_updated": "2021-12-15T02:24:00.000Z",
              "field": "Respiratoire",
              "creator": "Andreis PURIM",
              "preview": "https://www.researchgate.net/profile/John-Magnussen/publication/13354345/figure/fig2/AS:601775111409672@1520485775964/Lung-scan-in-eight-standard-views-of-8-mm3-block-sizes-involving-42-of-lung-tissue-In.png",
              "creator_avatar": "https://andreispurim.github.io/images/andreis.jpg",
              "dynamic_image": false,
              "creator_id": 1201,
              "keywords": [
                  "Respiratory",
                  "CR"
              ],
              "questions": 2,
              "uses": 1,
              "description": "A public CR created by the CHU Lille for respiratory scans used since 2018. It is release phase"
          },
          {
              "editable": false,
              "id": 2,
              "name": "Dermatologie 2020",
              "last_updated": "2021-12-14T02:24:00.000Z",
              "field": "Dermatologie",
              "creator": "Katia MALTA",
              "preview": "https://i1.rgstatic.net/publication/309433994_Hydroxyurea_and_nonmelanoma_skin_cancers_Report_of_three_cases_and_review_of_the_literature/links/5810e8a408aef2ef97b2d07c/largepreview.png",
              "creator_avatar": "https://i1.rgstatic.net/ii/profile.image/278835607162910-1443490997982_Q512/Katia-Purim.jpg",
              "dynamic_image": false,
              "creator_id": 761,
              "keywords": [
                  "Dermatology",
                  "Skin"
              ],
              "questions": 3,
              "uses": 12,
              "description": "This is a standard medical report for all dermatologic scans in Brazil. In the current version it does not have a dynamic image"
          },
          {
              "id": 3,
              "editable": true,
              "name": "Working Test 1",
              "last_updated": "2022-02-07T11:11:31.866Z",
              "field": "Working",
              "creator": "Andreis PURIM",
              "preview": "data:image/jpeg;base64,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",
              "creator_avatar": "https://andreispurim.github.io/images/andreis.jpg",
              "dynamic_image": false,
              "creator_id": 1201,
              "keywords": [
                  "Working"
              ],
              "questions": 3,
              "uses": 0,
              "description": "This should be working",
              "paragraph": ""
          },
          {
              "id": 4,
              "editable": true,
              "name": "Working Test 2",
              "last_updated": "2022-02-07T11:13:48.691Z",
              "field": "Test 2",
              "creator": "Andreis PURIM",
              "preview": "data:image/jpeg;base64,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",
              "creator_avatar": "https://andreispurim.github.io/images/andreis.jpg",
              "dynamic_image": false,
              "creator_id": 1201,
              "keywords": [
                  "Key1",
                  "Key2"
              ],
              "questions": 3,
              "uses": 0,
              "description": "This is a test",
              "paragraph": ""
          }
      ],
      "columns": [
          {
              "id": "favorite",
              "label": "Favori",
              "default": true,
              "minWidth": 0,
              "align": "center"
          },
          {
              "id": "name",
              "label": "Titre",
              "default": true,
              "minWidth": 170,
              "align": "left"
          },
          {
              "id": "field",
              "label": "Domaine",
              "default": true,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "creator",
              "label": "Créateur",
              "default": true,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "uses",
              "label": "Usages",
              "default": true,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "last_updated",
              "label": "Dernière mise à jour",
              "default": false,
              "minWidth": 100,
              "align": "right"
          },
          {
              "id": "keywords",
              "label": "Mots Clés",
              "default": false,
              "minWidth": 100,
              "align": "right"
          }
      ],
      "users": {
          "andreis": {
              "id": 1201,
              "username": "andreis",
              "password": "qwert",
              "admin": true,
              "firstname": "Andreis",
              "lastname": "PURIM",
              "description": "Étudiant à Centrale Lille",
              "joined": "2021-02-05",
              "last_seen": "2022-02-05",
              "avatar": "https://andreispurim.github.io/images/andreis.jpg",
              "chips": [
                  {
                      "type": "work",
                      "label": "CHU Lille"
                  },
                  {
                      "type": "study",
                      "label": "Centrale Lille"
                  },
                  {
                      "type": "favorites",
                      "label": "0 Favoris"
                  },
                  {
                      "type": "created",
                      "label": "0 Crées"
                  }
              ],
              "favorites": [
                  0
              ],
              "recents": {
                  "1": "2021-12-14T02:24:00.000Z"
              },
              "created": [
                  0,
                  1,
                  3,
                  4
              ]
          },
          "joel": {
              "id": 999,
              "username": "joel",
              "password": "qwert",
              "admin": false,
              "firstname": "Joel",
              "lastname": "KALIL",
              "description": "Student at Centrale Lille and backend developer",
              "joined": "2021-03-05",
              "last_seen": "2022-02-05",
              "avatar": "https://api-isarvit.herokuapp.com/static/images/joel.png",
              "chips": [
                  {
                      "type": "study",
                      "label": "Centrale Lille"
                  },
                  {
                      "type": "favorites",
                      "label": "0 Favorites"
                  },
                  {
                      "type": "created",
                      "label": "0 Created"
                  }
              ],
              "favorites": [],
              "recents": [],
              "created": []
          }
      },
      "forms": {
          "0": {
              "formatted": {
                  "questions": [
                      {
                          "isRequired": true,
                          "name": "identifier",
                          "title": "ID du Patient",
                          "type": "text"
                      },
                      {
                          "isRequired": true,
                          "name": "patient_first_name",
                          "title": "Prénom",
                          "type": "text"
                      },
                      {
                          "isRequired": true,
                          "name": "patient_name",
                          "title": "Nom",
                          "type": "text"
                      },
                      {
                          "isRequired": true,
                          "name": "patient_birth",
                          "title": "Date de naissance",
                          "type": "text"
                      },
                      {
                          "choices": [
                              "CT scan",
                              "Ultrasonography",
                              "Radiography AND US"
                          ],
                          "name": "exam_type",
                          "title": "Type d'Examen",
                          "type": "dropdown"
                      },
                      {
                          "choices": [
                              "No",
                              "IV",
                              "IV late phase",
                              "Urinary tract injection",
                              "NA"
                          ],
                          "name": "exam_indication",
                          "title": "Agent de Contraste Amélioré",
                          "type": "dropdown"
                      },
                      {
                          "choices": [
                              "Low dose",
                              "Standard dose",
                              "NA"
                          ],
                          "name": "condition_contrast",
                          "title": "Acute phase / clinical crisis at the time of the exam",
                          "type": "dropdown"
                      },
                      {
                          "choices": [
                              "No",
                              "Yes",
                              "Unknown",
                              "NA"
                          ],
                          "name": "condition_fever",
                          "title": "Patient febrile at the time of the exam",
                          "type": "dropdown"
                      },
                      {
                          "choices": [
                              "No",
                              "Bladder drainage",
                              "Upper tract drainage",
                              "NA"
                          ],
                          "name": "condition_derivation",
                          "title": "Urinary tract diversion in place at the time of the exam",
                          "type": "dropdown"
                      },
                      {
                          "choices": [
                              "No",
                              "Yes",
                              "Unknown",
                              "NA"
                          ],
                          "name": "abnormal_liver",
                          "title": "Liver anomaly detected",
                          "type": "dropdown"
                      },
                      {
                          "choices": [
                              "No",
                              "Yes",
                              "Unknown",
                              "NA"
                          ],
                          "name": "abnormal_adrenals",
                          "title": "Adrenals anomaly detected",
                          "type": "dropdown"
                      },
                      {
                          "choices": [
                              "No",
                              "Yes",
                              "Unknown",
                              "NA"
                          ],
                          "name": "abnormal_pancreas",
                          "title": "Pancreas anomaly detected",
                          "type": "dropdown"
                      },
                      {
                          "choices": [
                              "No",
                              "Yes",
                              "Unknown",
                              "NA"
                          ],
                          "name": "abnormal_spleen",
                          "title": "Splenic anomaly detected",
                          "type": "dropdown"
                      },
                      {
                          "choices": [
                              "No",
                              "Yes",
                              "Unknown",
                              "NA"
                          ],
                          "name": "abnormal_ovaries",
                          "title": "Ovarian anomaly detected",
                          "type": "dropdown"
                      },
                      {
                          "choices": [
                              "No",
                              "Yes",
                              "Unknown",
                              "NA"
                          ],
                          "name": "abnormal_lymphnode",
                          "title": "Abnormal lymphnode detected",
                          "type": "dropdown"
                      }
                  ],
                  "template": {
                      "exam_indication": {
                          "complete": true,
                          "begin": "This is a sample text to check the exam_indication variabe, which user chose ",
                          "end": " as an answer"
                      },
                      "conditition_contrast": {
                          "Low dose": "He chose L O W D O S E",
                          "Standart Dose": "He chose STANDARDDOSE",
                          "NA": "He chose None of the Above"
                      },
                      "condition_fever": {
                          "No": "Patient does not has fever",
                          "Yes": "<b>Patient HAS fever</b>",
                          "Unknown": "Condition about the fever is unknown",
                          "NA": "Not know inf patient has fever"
                      }
                  },
                  "svg": {
                      "name": "Urinary",
                      "begin": "<svg id=\"svgDiv\" viewBox=\"0 0 820 800\" width=\"150\" height=\"150\" xmlns=\"http://www.w3.org/2000/svg\">",
                      "end": "</svg>",
                      "organs": [
                          [
                              "<path id=\"left_ureter\" class=\"cls-1\" d=\"M 315.556 659.001 C 317.345 657.795 308.314 640.908 303.594 632.086 C 303.594 632.086 286.663 600.431 282.66 590.22 C 281.575 587.449 282.842 590.473 273.7 557.324 C 270.628 546.198 268.455 538.486 267.719 527.42 C 267.354 521.9 267.54 518.499 267.719 512.467 C 268.359 491.007 267.345 489.324 267.719 470.601 C 267.949 459.081 268.289 444.31 270.711 425.743 C 272.631 410.943 273.825 409.974 276.692 392.847 C 280.929 367.535 282.045 347.727 282.673 336.028 C 283.633 318.179 284.445 302.905 282.673 282.201 C 281.777 271.753 280.692 259.062 276.692 243.324 C 274.724 235.577 269.533 217.199 255.757 192.486 C 229.069 144.623 190.343 109.145 186.964 111.759 C 186.714 111.951 186.81 112.236 186.964 114.748 C 186.964 114.748 187.348 121.02 186.964 129.702 C 186.749 134.521 186.471 140.815 183.975 147.644 C 180.205 157.948 173.434 163.862 175.015 165.586 C 175.552 166.178 176.695 165.858 178.007 165.586 C 178.007 165.586 179.082 165.362 192.957 165.586 C 197.629 165.663 213.034 171.103 231.834 195.491 C 257.607 228.924 264.628 265.356 264.73 282.211 L 264.73 327.055 C 264.986 351.919 266.039 353.151 264.73 362.943 C 264.071 367.871 263.716 368.227 261.738 380.886 C 261.098 384.908 259.882 392.815 258.749 401.82 C 256.932 416.255 257.553 416.102 255.757 431.724 C 254.042 446.662 253.197 449.087 252.769 458.636 C 252.378 466.956 252.637 473.036 252.769 476.582 C 253.658 500.943 252.49 515.407 252.769 527.42 C 253.562 561.66 266.442 590.012 270.711 599.19 C 287.213 634.707 313.095 660.655 315.556 659.001 Z\" style=\"fill: rgb(255, 238, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>",
                              "<path class=\"cls-2\" d=\"M 323.748 663.98 C 325.698 663.023 313.622 651.238 302.506 629.341 C 288.019 600.788 285.942 576.281 285.514 569.505 C 285.514 569.387 285.514 569.472 285.514 541.16 C 285.514 518.501 285.514 507.169 285.514 506.519 C 285.408 475.761 285.027 476.287 285.514 468.728 C 285.842 463.674 287.154 453.732 289.765 434.086 C 292.364 414.5 292.614 413.62 294.011 402.594 C 295.204 393.158 296.243 383.568 298.261 364.804 C 300.914 340.126 302.247 327.648 302.506 320.713 C 302.892 310.468 302.35 312.345 302.506 286.073 C 302.651 262.1 303.097 261.385 302.506 254.579 C 301.418 241.8 298.572 229.137 294.011 216.788 C 291.62 210.385 284.979 194.015 268.523 172.7 C 266.276 169.788 245.302 140.787 213.916 120.059 C 210.833 118.037 198.864 110.266 192.059 112.865 C 189.787 113.727 187.715 116.571 183.563 122.3 C 182.098 124.322 181.441 125.373 179.313 128.598 C 176 133.629 173.598 137.269 170.817 141.194 C 165.54 148.643 162.902 152.366 162.343 152.99 C 159.54 156.059 157.022 158.206 158.076 160.104 C 158.908 161.603 161.599 162.26 163.641 162.755 C 165.954 163.311 168.405 163.48 170.817 163.251 C 181.509 165.823 188.064 168.086 192.059 169.549 C 192.551 169.731 193.074 169.93 193.651 170.189 C 200.168 173.121 203.651 176.994 205.719 179.346 C 211.701 186.086 206.628 179.308 217.538 191.595 C 224.275 199.178 227.643 202.969 230.302 206.473 C 238.375 217.126 242.411 222.452 243.031 229.389 C 243.031 229.607 243.031 229.473 243.031 241.985 L 243.031 251.421 C 243.031 255.903 243.221 260.593 244.394 275.549 C 245.408 288.692 245.507 288.017 246.134 296.894 C 246.63 303.897 247.043 309.787 247.298 317.555 C 247.586 326.697 247.752 332.615 247.298 339.598 C 246.63 349.37 245.247 352.585 243.047 364.794 C 241.434 373.731 241.489 375.005 238.797 399.433 C 236.839 417.256 236.766 414.743 234.552 434.076 C 231.325 462.302 229.72 476.637 230.302 487.613 C 230.997 500.638 233.112 513.487 234.552 522.255 C 235.944 530.704 236.947 536.834 238.797 544.298 C 244.539 567.446 253.691 584.537 255.794 588.391 C 266.09 607.26 277.435 620.201 285.528 629.33 C 301.533 647.41 321.32 665.177 323.748 663.98 Z\" style=\"fill: rgb(212, 0, 0); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>"
                          ],
                          [
                              "<path id=\"right_ureter\" class=\"cls-1\" d=\"M 652.605 114.843 C 654.394 116.049 645.363 132.936 640.643 141.758 C 640.643 141.758 623.712 173.413 619.709 183.624 C 618.624 186.395 619.891 183.371 610.749 216.52 C 607.677 227.646 605.504 235.358 604.768 246.424 C 604.403 251.944 604.589 255.346 604.768 261.378 C 605.408 282.837 604.394 284.52 604.768 303.243 C 604.999 314.763 605.338 329.534 607.76 348.101 C 609.68 362.901 610.874 363.87 613.741 380.997 C 617.978 406.309 619.095 426.117 619.722 437.816 C 620.682 455.666 621.495 470.939 619.722 491.643 C 618.826 502.091 617.741 514.782 613.741 530.52 C 611.773 538.267 606.583 556.645 592.807 581.358 C 566.119 629.221 527.392 664.699 524.013 662.085 C 523.763 661.893 523.859 661.608 524.013 659.096 C 524.013 659.096 524.397 652.824 524.013 644.142 C 523.799 639.323 523.52 633.029 521.024 626.2 C 517.255 615.896 510.483 609.982 512.064 608.258 C 512.602 607.666 513.744 607.986 515.056 608.258 C 515.056 608.258 516.131 608.482 530.007 608.258 C 534.679 608.181 550.083 602.741 568.883 578.354 C 594.656 544.92 601.677 508.488 601.779 491.634 L 601.779 446.789 C 602.035 421.925 603.088 420.693 601.779 410.901 C 601.12 405.973 600.765 405.618 598.787 392.958 C 598.147 388.936 596.931 381.029 595.799 372.024 C 593.981 357.589 594.602 357.742 592.807 342.12 C 591.091 327.182 590.247 324.757 589.818 315.208 C 589.427 306.888 589.687 300.808 589.818 297.262 C 590.707 272.901 589.539 258.437 589.818 246.424 C 590.611 212.184 603.491 183.832 607.76 174.654 C 624.263 139.138 650.144 113.189 652.605 114.843 Z\" style=\"fill: rgb(255, 238, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\" transform=\"matrix(-1, 0, 0, -1, 1164.665192, 776.988724)\"></path>",
                              "<path class=\"cls-2\" d=\"M 656.805 119.096 C 658.63 120.056 647.328 131.877 636.924 153.841 C 623.364 182.48 621.421 207.062 621.019 213.858 C 621.019 213.977 621.019 213.891 621.019 242.289 C 621.019 265.017 621.019 276.384 621.019 277.036 C 620.92 307.886 620.563 307.359 621.019 314.941 C 621.327 320.011 622.555 329.983 624.998 349.688 C 627.431 369.333 627.665 370.217 628.972 381.276 C 630.089 390.741 631.061 400.36 632.951 419.181 C 635.433 443.934 636.68 456.45 636.924 463.406 C 637.285 473.682 636.777 471.799 636.924 498.151 C 637.059 522.197 637.477 522.914 636.924 529.74 C 635.905 542.558 633.241 555.26 628.972 567.646 C 626.734 574.069 620.518 590.488 605.117 611.868 C 603.013 614.788 583.383 643.877 554.007 664.668 C 551.121 666.697 539.919 674.492 533.549 671.885 C 531.423 671.02 529.484 668.167 525.597 662.421 C 524.227 660.392 523.612 659.339 521.619 656.103 C 518.519 651.058 516.271 647.407 513.668 643.47 C 508.73 635.998 506.26 632.264 505.736 631.637 C 503.113 628.56 500.757 626.406 501.742 624.502 C 502.522 622.999 505.04 622.34 506.951 621.843 C 509.116 621.286 511.409 621.116 513.668 621.346 C 523.676 618.765 529.811 616.496 533.549 615.029 C 534.01 614.846 534.499 614.646 535.04 614.387 C 541.139 611.446 544.399 607.561 546.335 605.202 C 551.934 598.441 547.185 605.239 557.397 592.916 C 563.703 585.31 566.855 581.507 569.344 577.993 C 576.899 567.307 580.677 561.965 581.257 555.006 C 581.257 554.788 581.257 554.923 581.257 542.373 L 581.257 532.908 C 581.257 528.412 581.435 523.708 582.533 508.707 C 583.482 495.524 583.574 496.2 584.161 487.296 C 584.625 480.273 585.012 474.365 585.251 466.573 C 585.52 457.403 585.676 451.468 585.251 444.463 C 584.625 434.662 583.331 431.437 581.272 419.191 C 579.763 410.227 579.814 408.949 577.295 384.447 C 575.462 366.57 575.393 369.09 573.32 349.698 C 570.3 321.387 568.799 307.008 569.344 295.998 C 569.995 282.934 571.974 270.046 573.32 261.252 C 574.624 252.777 575.564 246.628 577.295 239.142 C 582.669 215.924 591.234 198.781 593.203 194.914 C 602.839 175.989 613.458 163.008 621.032 153.852 C 636.013 135.717 654.532 117.896 656.805 119.096 Z\" style=\"fill: rgb(212, 0, 0); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\" transform=\"matrix(-1, 0, 0, -1, 1158.513489, 791.451279)\"></path>"
                          ],
                          [
                              "<path id=\"bladder\" class=\"cls-1\" d=\"M 419.731 761.883 C 421.685 761.182 422.827 759.68 424.214 757.4 C 426.835 753.113 427.574 750.584 428.702 748.429 C 430.675 744.589 433.426 742.573 437.674 739.457 C 444.211 734.657 449.755 732.814 455.616 730.486 C 465.792 726.44 473.938 723.209 482.53 717.046 C 486.576 714.137 494.011 708.733 500.472 699.104 C 503.462 694.649 508.406 687.104 509.443 676.673 C 509.582 675.296 509.51 675.257 509.443 667.702 C 509.4 662.624 509.414 656.84 509.443 645.277 C 509.51 620.633 510.082 621.901 509.443 618.363 C 507.952 610.37 504.904 602.749 500.472 595.933 C 494.069 585.79 486.499 579.987 478.046 573.502 C 473.757 570.235 469.269 567.239 464.606 564.531 C 456.859 560.029 450.686 556.525 442.176 555.56 C 439.723 555.281 438.749 555.142 433.205 555.56 C 432.499 555.617 423.763 555.598 406.291 555.56 C 376.57 555.502 378.134 554.859 374.894 555.56 C 361.934 558.363 353.026 565.107 347.976 569 C 337.704 576.953 332.482 585.099 325.55 595.913 C 318.907 606.277 313.478 614.955 312.11 627.315 C 311.875 629.413 312.053 628.985 312.11 640.755 C 312.23 664.496 311.515 666.545 312.11 672.157 C 313.867 688.688 323.208 700.553 325.55 703.558 L 325.55 703.558 C 332.75 710.758 347.016 725.024 365.923 730.472 C 373.266 732.566 380.765 734.066 388.349 734.955 C 393.826 734.955 398.52 735.809 401.789 739.443 C 402.835 740.6 403.982 743.206 406.272 748.414 C 407.467 751.131 408.552 753.848 410.76 757.385 C 412.358 759.949 413.482 761.225 415.243 761.869 C 416.696 762.375 418.275 762.38 419.731 761.883 Z\" style=\"fill: rgb(255, 238, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>"
                          ],
                          [
                              "<path id=\"left_kidney\" class=\"cls-3\" d=\"M 115.071 247.607 C 122.751 244.95 132.994 241.424 141.169 231.294 C 141.784 230.533 155.297 213.375 150.944 195.411 C 149.547 189.56 145.823 181.978 144.416 179.098 C 141.047 172.2 139.787 171.344 137.891 166.049 C 136.057 160.787 134.96 155.298 134.631 149.736 C 134.17 143.368 135.06 143.221 134.631 136.687 C 134.201 130.152 133.933 125.208 131.367 120.377 C 126.692 111.597 117.822 108.232 118.318 107.324 C 118.747 106.546 125.156 109.419 128.092 110.588 C 145.851 117.57 168.123 113.032 183.552 104.064 C 189.644 100.524 200.309 94.324 206.386 81.226 C 206.945 80.026 213.12 66.264 209.65 51.868 C 202.536 22.342 158.645 5.819 124.821 6.193 C 102.563 6.441 85.353 14.005 75.886 19.242 C 51.345 32.825 39.58 52.5 30.214 68.177 C 24.775 77.278 11.409 101.875 7.377 136.687 C 5.233 155.188 3.261 172.248 10.641 192.147 C 21.239 220.72 47.815 246.256 79.15 250.871 C 97.323 253.548 112.387 248.532 115.071 247.607 Z\" style=\"fill: rgb(255, 170, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>",
                              "<path class=\"cls-2\" d=\"M 158.014 215.905 C 159.29 217.755 145.693 228.621 127.073 235.905 C 115.829 240.305 96.565 247.83 75.497 244.467 C 28.809 237.028 12.001 182.225 10.169 175.906 C 6.468 163.146 6.586 153.443 6.729 141.618 C 6.94 124.775 7.318 93.694 27.362 61.62 C 36.951 46.272 61.229 7.413 109.879 -1.239 C 117.401 -2.575 148.143 -8.048 175.207 7.321 C 210.048 27.133 212.422 66.297 209.588 67.321 C 208.286 67.793 205.358 58.345 195.835 55.893 C 193.706 55.342 184.622 53.448 168.33 64.454 C 141.557 82.571 132.333 110.559 127.073 127.312 C 127.073 127.312 118.159 155.69 123.633 190.168 C 124.26 194.143 126.013 203.162 133.933 210.169 C 135.827 211.845 139.085 214.645 144.235 215.884 C 151.731 217.696 157.252 214.801 158.014 215.905 Z\" style=\"fill: rgb(212, 0, 0); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>"
                          ],
                          [
                              "<path id=\"right_kidney\" class=\"cls-3\" d=\"M 722.276 11.944 C 729.956 14.601 740.198 18.127 748.374 28.257 C 748.988 29.018 762.501 46.176 758.148 64.14 C 756.752 69.991 753.027 77.574 751.62 80.454 C 748.251 87.352 746.991 88.207 745.096 93.503 C 743.261 98.764 742.164 104.253 741.835 109.816 C 741.374 116.183 742.265 116.33 741.835 122.865 C 741.406 129.4 741.137 134.343 738.571 139.174 C 733.897 147.954 725.026 151.319 725.522 152.227 C 725.952 153.005 732.361 150.132 735.297 148.963 C 753.055 141.981 775.327 146.519 790.757 155.487 C 796.848 159.027 807.513 165.227 813.591 178.325 C 814.149 179.526 820.325 193.287 816.855 207.683 C 809.74 237.209 765.849 253.732 732.026 253.358 C 709.768 253.11 692.557 245.546 683.09 240.309 C 658.549 226.726 646.785 207.051 637.419 191.374 C 631.98 182.273 618.613 157.676 614.581 122.865 C 612.438 104.363 610.465 87.303 617.845 67.404 C 628.443 38.831 655.02 13.295 686.354 8.68 C 704.528 6.003 719.591 11.019 722.276 11.944 Z\" style=\"fill: rgb(255, 170, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\" transform=\"matrix(-1, 0, 0, -1, 1430.53241, 261.26618)\"></path>",
                              "<path class=\"cls-2\" d=\"M 763.522 36.173 C 764.711 34.323 752.043 23.457 734.694 16.173 C 724.218 11.773 706.269 4.248 686.64 7.611 C 643.14 15.05 627.48 69.853 625.773 76.172 C 622.325 88.932 622.434 98.635 622.568 110.46 C 622.765 127.303 623.116 158.384 641.791 190.458 C 650.726 205.806 673.346 244.665 718.674 253.317 C 725.683 254.653 754.325 260.126 779.541 244.757 C 812.003 224.945 814.215 185.781 811.575 184.757 C 810.361 184.285 807.634 193.733 798.76 196.185 C 796.778 196.736 788.313 198.63 773.134 187.624 C 748.189 169.507 739.594 141.519 734.694 124.766 C 734.694 124.766 726.388 96.388 731.489 61.91 C 732.073 57.935 733.706 48.916 741.086 41.909 C 742.85 40.233 745.886 37.433 750.684 36.194 C 757.669 34.382 762.812 37.277 763.522 36.173 Z\" style=\"fill: rgb(212, 0, 0); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\" transform=\"matrix(-1, 0, 0, -1, 1434.899841, 262.128242)\"></path>"
                          ],
                          [
                              "<path id=\"left_neuron\" class=\"cls-1\" d=\"M 197.597 120.714 C 196.505 117.682 192.538 117.599 185.218 114.016 C 185.218 114.016 175.961 109.493 164.564 97.273 C 143.166 74.338 153.816 39.681 139.775 36.99 C 139.457 36.932 139.775 36.99 135.641 36.99 C 116.366 36.922 112.653 35.281 110.853 36.99 C 107.984 39.721 115.473 45.769 123.232 60.434 C 125.531 64.77 131.19 76.176 131.495 90.576 C 131.707 101.197 128.789 103.261 127.361 103.971 C 122.67 106.297 115.058 103.448 110.836 100.62 C 107.741 98.563 107.357 96.983 102.573 90.586 C 92.604 77.233 90.84 77.026 90.194 77.191 C 87.67 77.818 91.636 86.275 86.065 90.586 C 81.599 94.037 73.886 92.603 73.687 93.933 C 73.51 95.03 78.7 96.284 81.949 97.284 C 94.801 101.226 106.897 110.36 110.871 120.724 C 112.096 123.924 114.236 129.5 110.871 134.123 C 106.596 139.99 76.653 136.807 69.557 137.471 C 68.674 137.553 62.267 138.152 61.295 140.821 C 60.557 142.839 63.642 144.089 65.424 147.519 C 68.735 153.88 63.142 159.245 65.424 160.914 C 68.271 162.996 77.886 154.905 90.212 150.88 C 107.401 145.251 131.402 146.939 135.66 154.231 C 143.542 167.713 86.207 204.566 86.083 204.466 C 85.959 204.366 95.632 194.493 110.871 191.067 C 114.987 190.142 121.322 188.795 127.397 191.067 C 135.527 194.113 137.848 201.649 139.775 201.101 C 141.469 200.635 138.86 195.116 139.775 187.706 C 139.775 187.706 141.508 173.607 156.301 164.261 C 158.657 162.771 161.04 161.269 164.564 160.914 C 168.542 160.513 170.368 161.95 172.826 160.914 C 174.992 159.997 175.532 158.048 176.956 154.217 C 178.21 150.834 179.957 147.576 181.089 144.183 C 185.355 131.235 199.79 126.82 197.597 120.714 Z\" style=\"fill: rgb(255, 238, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\"></path>"
                          ],
                          [
                              "<path id=\"right_neuron\" class=\"cls-1\" d=\"M 763.635 123.494 C 762.543 126.526 758.576 126.609 751.256 130.192 C 751.256 130.192 741.999 134.715 730.602 146.935 C 709.204 169.87 719.854 204.527 705.813 207.218 C 705.495 207.276 705.813 207.218 701.679 207.218 C 682.404 207.286 678.691 208.927 676.891 207.218 C 674.022 204.487 681.511 198.439 689.27 183.774 C 691.569 179.438 697.228 168.032 697.533 153.632 C 697.745 143.011 694.827 140.947 693.399 140.237 C 688.708 137.911 681.096 140.76 676.874 143.588 C 673.779 145.645 673.395 147.225 668.611 153.622 C 658.642 166.975 656.878 167.182 656.232 167.017 C 653.708 166.39 657.674 157.933 652.103 153.622 C 647.637 150.171 639.924 151.605 639.725 150.275 C 639.548 149.178 644.738 147.924 647.987 146.924 C 660.839 142.982 672.935 133.848 676.909 123.484 C 678.134 120.284 680.274 114.708 676.909 110.085 C 672.634 104.218 642.691 107.401 635.595 106.737 C 634.712 106.655 628.305 106.056 627.333 103.387 C 626.595 101.369 629.68 100.119 631.462 96.689 C 634.773 90.328 629.18 84.963 631.462 83.294 C 634.309 81.212 643.924 89.303 656.25 93.328 C 673.439 98.957 697.44 97.269 701.698 89.977 C 709.58 76.495 652.245 39.642 652.121 39.742 C 651.997 39.842 661.67 49.715 676.909 53.141 C 681.025 54.066 687.36 55.413 693.435 53.141 C 701.565 50.095 703.886 42.559 705.813 43.107 C 707.507 43.573 704.898 49.092 705.813 56.502 C 705.813 56.502 707.546 70.601 722.339 79.947 C 724.695 81.437 727.078 82.939 730.602 83.294 C 734.58 83.695 736.406 82.258 738.864 83.294 C 741.03 84.211 741.57 86.16 742.994 89.991 C 744.248 93.374 745.995 96.632 747.127 100.025 C 751.393 112.973 765.828 117.388 763.635 123.494 Z\" style=\"fill: rgb(255, 238, 170); stroke: rgb(0, 0, 0); stroke-miterlimit: 10; stroke-width: 7px;\" transform=\"matrix(-1, 0, 0, -1, 1391.081299, 247.73468)\"></path>"
                          ]
                      ]
                  }
              }
          },
          "3": {
              "id": 3,
              "card": 4,
              "questions": [
                  {
                      "questionID": 0,
                      "dragID": "0",
                      "type": "Text",
                      "variable": "this_is_a_question",
                      "questionLabel": "This is a question",
                      "required": false,
                      "default": null,
                      "min": null,
                      "max": null,
                      "loopvar": false,
                      "others": false,
                      "qchoices": 0,
                      "choices": []
                  },
                  {
                      "questionID": 1,
                      "dragID": "1",
                      "type": "Text",
                      "variable": "this_is_an_obligatory_question",
                      "questionLabel": "This is an obligatory question!",
                      "required": true,
                      "default": null,
                      "min": null,
                      "max": null,
                      "loopvar": false,
                      "others": false,
                      "qchoices": 0,
                      "choices": []
                  },
                  {
                      "questionID": 2,
                      "dragID": "2",
                      "type": "Text",
                      "variable": "this_is_another_question",
                      "questionLabel": "This is another question",
                      "required": false,
                      "default": null,
                      "min": null,
                      "max": null,
                      "loopvar": false,
                      "others": false,
                      "qchoices": 0,
                      "choices": []
                  }
              ],
              "qlength": 3,
              "outputs": [],
              "nodes": [],
              "qnodes": 0,
              "nodesUsedIDs": {},
              "selnode": null,
              "template": "<p><img class=\"qrcode\" width=\"200\" height=\"200\" src=\"https://andreispurim.github.io/Imagem1.png\"></p><p>User has answered the following:&nbsp;<med-var class=\"this_is_a_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_a_question</med-var>&nbsp;to the first,&nbsp;<med-var class=\"this_is_an_obligatory_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_an_obligatory_question</med-var>&nbsp;to the second</p><p>and&nbsp;<med-var class=\"this_is_another_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_another_question</med-var>&nbsp;to the final one. Congrats user!</p>",
              "svg": {
                  "base": "",
                  "parts": [],
                  "used_variables": []
              },
              "formatted": {
                  "questions": [
                      {
                          "isRequired": false,
                          "type": "text",
                          "name": "this_is_a_question",
                          "title": "This is a question",
                          "defaultAnswer": null
                      },
                      {
                          "isRequired": true,
                          "type": "text",
                          "name": "this_is_an_obligatory_question",
                          "title": "This is an obligatory question!",
                          "defaultAnswer": null
                      },
                      {
                          "isRequired": false,
                          "type": "text",
                          "name": "this_is_another_question",
                          "title": "This is another question",
                          "defaultAnswer": null
                      }
                  ],
                  "template": "<p><img class=\"qrcode\" width=\"200\" height=\"200\" src=\"https://andreispurim.github.io/Imagem1.png\"></p><p>User has answered the following:&nbsp;<med-var class=\"this_is_a_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_a_question</med-var>&nbsp;to the first,&nbsp;<med-var class=\"this_is_an_obligatory_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_an_obligatory_question</med-var>&nbsp;to the second</p><p>and&nbsp;<med-var class=\"this_is_another_question\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_another_question</med-var>&nbsp;to the final one. Congrats user!</p>",
                  "svg": {
                      "name": "svg",
                      "begin": "",
                      "end": "</svg>",
                      "organs": []
                  }
              }
          },
          "4": {
              "id": 4,
              "card": 4,
              "questions": [
                  {
                      "questionID": 0,
                      "dragID": "0",
                      "type": "Text",
                      "variable": "this_is_a_text",
                      "questionLabel": "This is a text",
                      "required": false,
                      "default": null,
                      "min": null,
                      "max": null,
                      "loopvar": false,
                      "others": false,
                      "qchoices": 0,
                      "choices": []
                  },
                  {
                      "questionID": 1,
                      "dragID": "1",
                      "type": "Choice",
                      "variable": "now_with_choices",
                      "questionLabel": "Now with choices!",
                      "required": false,
                      "default": null,
                      "min": null,
                      "max": null,
                      "loopvar": false,
                      "others": true,
                      "qchoices": 2,
                      "choices": [
                          {
                              "choiceID": 0,
                              "dragID": "0",
                              "text": "Choice 1"
                          },
                          {
                              "choiceID": 1,
                              "dragID": "1",
                              "text": "Choice 2"
                          }
                      ]
                  },
                  {
                      "questionID": 2,
                      "dragID": "2",
                      "type": "Multiple Choice",
                      "variable": "multiple_choices",
                      "questionLabel": "Multiple Choices!",
                      "required": false,
                      "default": null,
                      "min": null,
                      "max": null,
                      "loopvar": false,
                      "others": false,
                      "qchoices": 3,
                      "choices": [
                          {
                              "choiceID": 0,
                              "dragID": "0",
                              "text": "Option 0"
                          },
                          {
                              "choiceID": 1,
                              "dragID": "1",
                              "text": "Option 1"
                          },
                          {
                              "choiceID": 2,
                              "dragID": "2",
                              "text": "Option 2"
                          }
                      ]
                  }
              ],
              "qlength": 3,
              "outputs": [],
              "nodes": [],
              "qnodes": 0,
              "nodesUsedIDs": {},
              "selnode": null,
              "template": "<p><img class=\"qrcode\" width=\"200\" height=\"200\" src=\"https://andreispurim.github.io/Imagem1.png\"></p><p>User has answered&nbsp;<med-var class=\"this_is_a_text\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_a_text</med-var>&nbsp;in the this_is_a_text variable</p><p>and meanwhile, has chosen the answer&nbsp;<med-var class=\"now_with_choices\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">now_with_choices</med-var>&nbsp;from the radiogroup</p><p>Finally,&nbsp;<med-var class=\"multiple_choices\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">multiple_choices</med-var>&nbsp;from the multiple choices</p>",
              "svg": {
                  "base": "",
                  "parts": [],
                  "used_variables": []
              },
              "formatted": {
                  "questions": [
                      {
                          "isRequired": false,
                          "type": "text",
                          "name": "this_is_a_text",
                          "title": "This is a text",
                          "defaultAnswer": null
                      },
                      {
                          "isRequired": false,
                          "type": "radiogroup",
                          "name": "now_with_choices",
                          "title": "Now with choices!",
                          "choices": [
                              "Choice 1",
                              "Choice 2"
                          ],
                          "hasOther": true
                      },
                      {
                          "isRequired": false,
                          "type": "checkbox",
                          "name": "multiple_choices",
                          "title": "Multiple Choices!",
                          "choices": [
                              "Option 0",
                              "Option 1",
                              "Option 2"
                          ],
                          "hasOther": false
                      }
                  ],
                  "template": "<p><img class=\"qrcode\" width=\"200\" height=\"200\" src=\"https://andreispurim.github.io/Imagem1.png\"></p><p>User has answered&nbsp;<med-var class=\"this_is_a_text\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">this_is_a_text</med-var>&nbsp;in the this_is_a_text variable</p><p>and meanwhile, has chosen the answer&nbsp;<med-var class=\"now_with_choices\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">now_with_choices</med-var>&nbsp;from the radiogroup</p><p>Finally,&nbsp;<med-var class=\"multiple_choices\" style=\"color: blue; border: thin solid blue; border-radius: 5px; padding: 2px; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;\">multiple_choices</med-var>&nbsp;from the multiple choices</p>",
                  "svg": {
                      "name": "svg",
                      "begin": "",
                      "end": "</svg>",
                      "organs": []
                  }
              }
          }
      }
  }
}