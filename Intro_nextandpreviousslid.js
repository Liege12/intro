//Developed by: @nrzmalik

function updateHelperCSS() {
  var helperLayer = document.querySelector('.introjs-helperLayer');
  if (helperLayer) {
    helperLayer.style.boxShadow = 'rgba(115, 115, 115, 0.8) 0px 0px 1px 2px, rgba(115, 115, 115, 0.5) 0px 0px 0px 5000px';
  }
}

function observeHelperLayer() {
  var observer = new MutationObserver(function (mutationsList) {
    for (var mutation of mutationsList) {
      if (mutation.type === 'childList') {
        var addedNodes = mutation.addedNodes;
        for (var i = 0; i < addedNodes.length; i++) {
          if (addedNodes[i].classList && addedNodes[i].classList.contains('introjs-helperLayer')) {
            updateHelperCSS();
          }
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
observeHelperLayer();


function clrpIntroTour(language) {
	//Developed by: @nrzmalik
  var translations = {
    intro: {
      english: 'Welcome to the course! This is the slide area where the course content will be displayed. You can also click on each icon to navigate across the course.',
      arabic: 'مرحبًا بك في الدورة! هذه هي منطقة الشريحة حيث سيتم عرض محتوى الدورة. استخدم أزرار التنقل للتحرك بين الشرائح.',
      urdu: 'کورس میں خوش آمدید! یہاں سلائیڈ کا علاقہ ہے جہاں کورس کی مواد کی عرض ہوگی. اسلائیڈوں کے درمیان حرکت کرنے کے لئے نیویگیشن بٹن استعمال کریں.',
      dutch: 'Welkom bij de cursus! Dit is het schuifgebied waar de cursusinhoud wordt weergegeven. Gebruik de navigatieknoppen om tussen dia\'s te bewegen.',
      spanish: '¡Bienvenido al curso! Esta es el área de diapositivas donde se mostrará el contenido del curso. Utiliza los botones de navegación para moverte entre las diapositivas.',
      french: 'Bienvenue dans le cours ! C\'est ici que sera affiché le contenu du cours. Utilisez les boutons de navigation pour passer d\'une diapositive à l\'autre.',
      mandarin: '欢迎来到课程！这是显示课程内容的幻灯片区域。使用导航按钮在幻灯片之间移动。',
      portuguese: 'Bem-vindo ao curso! Esta é a área do slide onde o conteúdo do curso será exibido. Use os botões de navegação para se mover entre os slides.'
    },
    resources: {
      english: 'Here you can find helpful resources related to the course. Click on the links to access additional materials or references.',
      arabic: 'هنا يمكنك العثور على موارد مفيدة تتعلق بالدورة. انقر على الروابط للوصول إلى مواد إضافية أو مراجع.',
      urdu: 'یہاں آپ کورس سے متعلق مددگار وسائل تلاش کر سکتے ہیں. اضافی مواد یا حوالے تک رسائی حاصل کرنے کے لئے لنکس پر کلک کریں.',
      dutch: 'Hier vind je nuttige bronnen gerelateerd aan de cursus. Klik op de links om extra materiaal of referenties te openen.',
      spanish: 'Aquí puedes encontrar recursos útiles relacionados con el curso. Haz clic en los enlaces para acceder a materiales adicionales o referencias.',
      french: 'Ici, vous pouvez trouver des ressources utiles liées au cours. Cliquez sur les liens pour accéder à des matériaux supplémentaires ou des références.',
      mandarin: '在这里，您可以找到与课程相关的有用资源。点击链接访问额外的材料或参考资料。',
      portuguese: 'Aqui você pode encontrar recursos úteis relacionados ao curso. Clique nos links para acessar materiais adicionais ou referências.'
    },
    menu: {
      english: 'The course menu is located here. It provides an overview of the course structure and allows you to jump to specific chapter.',
      arabic: 'يقع قائمة الدورة هنا. يوفر نظرة عامة على هيكل الدورة ويتيح لك الانتقال إلى أقسام أو وحدات محددة.',
      urdu: 'کورس کی مینو یہاں موجود ہے. یہ کورس کی ساخت کا ایک جائزہ دیتی ہے اور آپ کو خاص حصوں یا ماڈیولز میں جانے کی اجازت دیتی ہے.',
      dutch: 'Het cursusmenu bevindt zich hier. Het biedt een overzicht van de cursusstructuur en stelt je in staat om naar specifieke secties of modules te springen.',
      spanish: 'El menú del curso se encuentra aquí. Proporciona una visión general de la estructura del curso y te permite saltar a secciones o módulos específicos.',
      french: 'Le menu du cours est situé ici. Il donne un aperçu de la structure du cours et vous permet de passer à des sections ou des modules spécifiques.',
      mandarin: '课程菜单位于此处。它提供了课程结构的概述，并允许您跳转到特定的部分或模块。',
      portuguese: 'O menu do curso está localizado aqui. Ele fornece uma visão geral da estrutura do curso e permite que você salte para seções ou módulos específicos.'
    },
    next: {
      english: 'To move to the next slide, click the "Next" button. It will take you to the next slide in the course.',
      arabic: 'للانتقال إلى الشريحة التالية، انقر على زر "التالي". سوف ينقلك إلى الموضوع أو الوحدة التالية في الدورة.',
      urdu: 'اگلی سلائیڈ پر منتقل ہونے کے لئے "اگلے" بٹن پر کلک کریں. یہ آپ کو کورس میں اگلے موضوع یا ماڈیول پر لے جائے گا.',
      dutch: 'Klik op de knop "Volgende" om naar de volgende dia te gaan. Het brengt je naar het volgende onderwerp of module in de cursus.',
      spanish: 'Para pasar a la siguiente diapositiva, haz clic en el botón "Siguiente". Te llevará al siguiente tema o módulo del curso.',
      french: 'Pour passer à la diapositive suivante, cliquez sur le bouton "Suivant". Il vous conduira au sujet ou module suivant dans le cours.',
      mandarin: '要进入下一张幻灯片，请单击“下一页”按钮。它将带您进入课程中的下一个主题或模块。',
      portuguese: 'Para avançar para o próximo slide, clique no botão "Próximo". Ele o levará para o próximo tópico ou módulo no curso.'
    },
    prev: {
      english: 'If you want to go back to the previous slide, use the "Previous" button. It will navigate you to the previous slide.',
      arabic: 'إذا كنت ترغب في العودة إلى الشريحة السابقة، استخدم زر "السابق". سيوجهك إلى الموضوع أو الوحدة السابقة.',
      urdu: 'اگر آپ پچھلی سلائیڈ پر واپس جانا چاہتے ہیں تو "پچھلا" بٹن استعمال کریں. یہ آپ کو کورس میں پچھلے موضوع یا ماڈیول پر نیویگیٹ کرے گا.',
      dutch: 'Als je terug wilt naar de vorige dia, gebruik dan de knop "Vorige". Het zal je naar het vorige onderwerp of module navigeren.',
      spanish: 'Si deseas volver a la diapositiva anterior, utiliza el botón "Anterior". Te llevará al tema o módulo anterior.',
      french: 'Si vous souhaitez revenir à la diapositive précédente, utilisez le bouton "Précédent". Il vous ramènera au sujet ou module précédent.',
      mandarin: '如果您想返回上一张幻灯片，请使用“上一页”按钮。它将使您导航到前一个主题或模块。',
      portuguese: 'Se você deseja voltar para o slide anterior, use o botão "Anterior". Ele irá levá-lo de volta ao tópico ou módulo anterior.'
    },
	captions: {
      english: 'This button allows you to enable or disable captions for the course content. Click on it to toggle captions on or off.',
      arabic: 'هذا الزر يسمح لك بتمكين أو تعطيل الشرح لمحتوى الدورة. انقر عليه لتبديل الشرح تشغيل أو إيقاف.',
      urdu: 'اس بٹن کی مدد سے آپ کورس کی مواد کے لئے شرح کو فعال یا غیرفعال کرسکتے ہیں. اس پر کلک کریں تاکہ شرح کو آن یا آف کریں.',
      dutch: 'Deze knop stelt u in staat om bijschriften voor de cursusinhoud in of uit te schakelen. Klik erop om bijschriften aan of uit te zetten.',
      spanish: 'Este botón te permite habilitar o deshabilitar los subtítulos para el contenido del curso. Haz clic en él para activar o desactivar los subtítulos.',
      french: 'Ce bouton vous permet d\'activer ou de désactiver les sous-titres pour le contenu du cours. Cliquez dessus pour activer ou désactiver les sous-titres.',
      mandarin: '此按钮可让您启用或禁用课程内容的字幕。单击它以切换字幕的开启或关闭状态。',
      portuguese: 'Este botão permite que você habilite ou desabilite legendas para o conteúdo do curso. Clique nele para ativar ou desativar as legendas.'
    },
  volume: {
      english: 'By clicking on this button, you can increase or decrease the volume according to your preferences.',
      arabic: 'هذا الزر يسمح لك بتمكين أو تعطيل الشرح لمحتوى الدورة. انقر عليه لتبديل الشرح تشغيل أو إيقاف.',
      urdu: 'اس بٹن کی مدد سے آپ کورس کی مواد کے لئے شرح کو فعال یا غیرفعال کرسکتے ہیں. اس پر کلک کریں تاکہ شرح کو آن یا آف کریں.',
      dutch: 'Deze knop stelt u in staat om bijschriften voor de cursusinhoud in of uit te schakelen. Klik erop om bijschriften aan of uit te zetten.',
      spanish: 'Este botón te permite habilitar o deshabilitar los subtítulos para el contenido del curso. Haz clic en él para activar o desactivar los subtítulos.',
      french: 'Ce bouton vous permet d\'activer ou de désactiver les sous-titres pour le contenu du cours. Cliquez dessus pour activer ou désactiver les sous-titres.',
      mandarin: '此按钮可让您启用或禁用课程内容的字幕。单击它以切换字幕的开启或关闭状态。',
      portuguese: 'Este botão permite que você habilite ou desabilite legendas para o conteúdo do curso. Clique nele para ativar ou desativar as legendas.'
    },
    titles: {
      english: {
        slide: 'Slide',
        resources: 'Helpful Resources',
        menu: 'Course Menu',
        next: 'Next Slide Button',
        prev: 'Prev Slide Button',
        captions: 'Captions',
        volume: 'Volume'
      },
      arabic: {
        slide: 'الشريحة',
        resources: 'موارد مفيدة',
        menu: 'قائمة الدورة',
        next: 'زر التالي',
        prev: 'زر السابق',
        captions: 'الشرح',
        volume: 'مقدار'
      },
      urdu: {
        slide: 'سلائیڈ',
        resources: 'مددگار وسائل',
        menu: 'کورس مینو',
        playback: 'اسلائیڈ پلے بیک کنٹرول',
        next: 'اگلے سلائیڈ بٹن',
        prev: 'پچھلے سلائیڈ بٹن',
        captions: 'شرح',
        volume: 'مقدار'
      },
      dutch: {
        slide: 'Schuif',
        resources: 'Nuttige bronnen',
        menu: 'Cursusmenu',
        next: 'Volgende dia knop',
        prev: 'Vorige dia knop',
        captions: 'Bijschriften',
        volume: 'volume'
      },
      spanish: {
        slide: 'Diapositiva',
        resources: 'Recursos útiles',
        menu: 'Menú del curso',
        next: 'Botón de siguiente diapositiva',
        prev: 'Botón de diapositiva anterior',
        captions: 'Subtítulos',
        volume: 'volumen'
      },
      french: {
        slide: 'Diapositive',
        resources: 'Ressources utiles',
        menu: 'Menu du cours',
        next: 'Bouton de diapositive suivante',
        prev: 'Bouton de diapositive précédente',
        captions: 'Sous-titres',
        volume: 'volume'
      },
      mandarin: {
        slide: '幻灯片',
        resources: '有用资源',
        menu: '课程菜单',
        next: '下一张幻灯片按钮',
        prev: '上一张幻灯片按钮',
        captions: '字幕',
        volume: '体积'
      },
      portuguese: {
        slide: 'Slide',
        resources: 'Recursos úteis',
        menu: 'Menu do curso',
        playback: 'Controle de reprodução de slides',
        next: 'Botão de próximo slide',
        prev: 'Botão de slide anterior',
        captions: 'Legendas',
        volume: 'volume'
      }
    }
  }

  introJs().setOptions({
    steps: [
      {
        element: '.acc-blocker',
        intro: translations['intro'][language],
        title: translations['titles'][language]['slide'],
      },
      {
        element: '#links-right',
        intro: translations['resources'][language],
        title: translations['titles'][language]['resources'],
      },
      {
        element: '#outline-content',
        intro: translations['menu'][language],
        title: translations['titles'][language]['menu'],
      },
      {
        element: '#volume',
        intro: translations['volume'][language],
        title: translations['titles'][language]['volume'],
      },
      {
        element: '#captions',
        intro: translations['captions'][language],
        title: translations['titles'][language]['captions'],
      },
	  {
        element: '#prev',
        intro: translations['prev'][language],
        title: translations['titles'][language]['prev'],
      },
      {
        element: '#next',
        intro: translations['next'][language],
        title: translations['titles'][language]['next'],
      }
      
    ],
  }).start();
  observeHelperLayer();
}
/// Without SeekBar
function clrpIntroTourWithoutSeekbar(language) {
	//Developed by: @nrzmalik
  var translations = {
    intro: {
      english: 'Welcome to the course! This is the slide area where the course content will be displayed. You can also click on each icon to navigate across the course.',
      arabic: 'مرحبًا بك في الدورة! هذه هي منطقة الشريحة حيث سيتم عرض محتوى الدورة. استخدم أزرار التنقل للتحرك بين الشرائح.',
      urdu: 'کورس میں خوش آمدید! یہاں سلائیڈ کا علاقہ ہے جہاں کورس کی مواد کی عرض ہوگی. اسلائیڈوں کے درمیان حرکت کرنے کے لئے نیویگیشن بٹن استعمال کریں.',
      dutch: 'Welkom bij de cursus! Dit is het schuifgebied waar de cursusinhoud wordt weergegeven. Gebruik de navigatieknoppen om tussen dia\'s te bewegen.',
      spanish: '¡Bienvenido al curso! Esta es el área de diapositivas donde se mostrará el contenido del curso. Utiliza los botones de navegación para moverte entre las diapositivas.',
      french: 'Bienvenue dans le cours ! C\'est ici que sera affiché le contenu du cours. Utilisez les boutons de navigation pour passer d\'une diapositive à l\'autre.',
      mandarin: '欢迎来到课程！这是显示课程内容的幻灯片区域。使用导航按钮在幻灯片之间移动。',
      portuguese: 'Bem-vindo ao curso! Esta é a área do slide onde o conteúdo do curso será exibido. Use os botões de navegação para se mover entre os slides.'
    },
    resources: {
      english: 'Here you can find helpful resources related to the course. Click on the links to access additional materials or references.',
      arabic: 'هنا يمكنك العثور على موارد مفيدة تتعلق بالدورة. انقر على الروابط للوصول إلى مواد إضافية أو مراجع.',
      urdu: 'یہاں آپ کورس سے متعلق مددگار وسائل تلاش کر سکتے ہیں. اضافی مواد یا حوالے تک رسائی حاصل کرنے کے لئے لنکس پر کلک کریں.',
      dutch: 'Hier vind je nuttige bronnen gerelateerd aan de cursus. Klik op de links om extra materiaal of referenties te openen.',
      spanish: 'Aquí puedes encontrar recursos útiles relacionados con el curso. Haz clic en los enlaces para acceder a materiales adicionales o referencias.',
      french: 'Ici, vous pouvez trouver des ressources utiles liées au cours. Cliquez sur les liens pour accéder à des matériaux supplémentaires ou des références.',
      mandarin: '在这里，您可以找到与课程相关的有用资源。点击链接访问额外的材料或参考资料。',
      portuguese: 'Aqui você pode encontrar recursos úteis relacionados ao curso. Clique nos links para acessar materiais adicionais ou referências.'
    },
    menu: {
      english: 'The course menu is located here. It provides an overview of the course structure and allows you to jump to specific chapter.',
      arabic: 'يقع قائمة الدورة هنا. يوفر نظرة عامة على هيكل الدورة ويتيح لك الانتقال إلى أقسام أو وحدات محددة.',
      urdu: 'کورس کی مینو یہاں موجود ہے. یہ کورس کی ساخت کا ایک جائزہ دیتی ہے اور آپ کو خاص حصوں یا ماڈیولز میں جانے کی اجازت دیتی ہے.',
      dutch: 'Het cursusmenu bevindt zich hier. Het biedt een overzicht van de cursusstructuur en stelt je in staat om naar specifieke secties of modules te springen.',
      spanish: 'El menú del curso se encuentra aquí. Proporciona una visión general de la estructura del curso y te permite saltar a secciones o módulos específicos.',
      french: 'Le menu du cours est situé ici. Il donne un aperçu de la structure du cours et vous permet de passer à des sections ou des modules spécifiques.',
      mandarin: '课程菜单位于此处。它提供了课程结构的概述，并允许您跳转到特定的部分或模块。',
      portuguese: 'O menu do curso está localizado aqui. Ele fornece uma visão geral da estrutura do curso e permite que você salte para seções ou módulos específicos.'
    },
    next: {
      english: 'To move to the next slide, click the "Next" button. It will take you to the next slide in the course.',
      arabic: 'للانتقال إلى الشريحة التالية، انقر على زر "التالي". سوف ينقلك إلى الموضوع أو الوحدة التالية في الدورة.',
      urdu: 'اگلی سلائیڈ پر منتقل ہونے کے لئے "اگلے" بٹن پر کلک کریں. یہ آپ کو کورس میں اگلے موضوع یا ماڈیول پر لے جائے گا.',
      dutch: 'Klik op de knop "Volgende" om naar de volgende dia te gaan. Het brengt je naar het volgende onderwerp of module in de cursus.',
      spanish: 'Para pasar a la siguiente diapositiva, haz clic en el botón "Siguiente". Te llevará al siguiente tema o módulo del curso.',
      french: 'Pour passer à la diapositive suivante, cliquez sur le bouton "Suivant". Il vous conduira au sujet ou module suivant dans le cours.',
      mandarin: '要进入下一张幻灯片，请单击“下一页”按钮。它将带您进入课程中的下一个主题或模块。',
      portuguese: 'Para avançar para o próximo slide, clique no botão "Próximo". Ele o levará para o próximo tópico ou módulo no curso.'
    },
    prev: {
      english: 'If you want to go back to the previous slide, use the "Previous" button. It will navigate you to the previous slide.',
      arabic: 'إذا كنت ترغب في العودة إلى الشريحة السابقة، استخدم زر "السابق". سيوجهك إلى الموضوع أو الوحدة السابقة.',
      urdu: 'اگر آپ پچھلی سلائیڈ پر واپس جانا چاہتے ہیں تو "پچھلا" بٹن استعمال کریں. یہ آپ کو کورس میں پچھلے موضوع یا ماڈیول پر نیویگیٹ کرے گا.',
      dutch: 'Als je terug wilt naar de vorige dia, gebruik dan de knop "Vorige". Het zal je naar het vorige onderwerp of module navigeren.',
      spanish: 'Si deseas volver a la diapositiva anterior, utiliza el botón "Anterior". Te llevará al tema o módulo anterior.',
      french: 'Si vous souhaitez revenir à la diapositive précédente, utilisez le bouton "Précédent". Il vous ramènera au sujet ou module précédent.',
      mandarin: '如果您想返回上一张幻灯片，请使用“上一页”按钮。它将使您导航到前一个主题或模块。',
      portuguese: 'Se você deseja voltar para o slide anterior, use o botão "Anterior". Ele irá levá-lo de volta ao tópico ou módulo anterior.'
    },
	captions: {
      english: 'This button allows you to enable or disable captions for the course content. Click on it to toggle captions on or off.',
      arabic: 'هذا الزر يسمح لك بتمكين أو تعطيل الشرح لمحتوى الدورة. انقر عليه لتبديل الشرح تشغيل أو إيقاف.',
      urdu: 'اس بٹن کی مدد سے آپ کورس کی مواد کے لئے شرح کو فعال یا غیرفعال کرسکتے ہیں. اس پر کلک کریں تاکہ شرح کو آن یا آف کریں.',
      dutch: 'Deze knop stelt u in staat om bijschriften voor de cursusinhoud in of uit te schakelen. Klik erop om bijschriften aan of uit te zetten.',
      spanish: 'Este botón te permite habilitar o deshabilitar los subtítulos para el contenido del curso. Haz clic en él para activar o desactivar los subtítulos.',
      french: 'Ce bouton vous permet d\'activer ou de désactiver les sous-titres pour le contenu du cours. Cliquez dessus pour activer ou désactiver les sous-titres.',
      mandarin: '此按钮可让您启用或禁用课程内容的字幕。单击它以切换字幕的开启或关闭状态。',
      portuguese: 'Este botão permite que você habilite ou desabilite legendas para o conteúdo do curso. Clique nele para ativar ou desativar as legendas.'
    },
	 volume: {
      english: 'By clicking on this button, you can increase or decrease the volume according to your preferences.',
      arabic: 'هذا الزر يسمح لك بتمكين أو تعطيل الشرح لمحتوى الدورة. انقر عليه لتبديل الشرح تشغيل أو إيقاف.',
      urdu: 'اس بٹن کی مدد سے آپ کورس کی مواد کے لئے شرح کو فعال یا غیرفعال کرسکتے ہیں. اس پر کلک کریں تاکہ شرح کو آن یا آف کریں.',
      dutch: 'Deze knop stelt u in staat om bijschriften voor de cursusinhoud in of uit te schakelen. Klik erop om bijschriften aan of uit te zetten.',
      spanish: 'Este botón te permite habilitar o deshabilitar los subtítulos para el contenido del curso. Haz clic en él para activar o desactivar los subtítulos.',
      french: 'Ce bouton vous permet d\'activer ou de désactiver les sous-titres pour le contenu du cours. Cliquez dessus pour activer ou désactiver les sous-titres.',
      mandarin: '此按钮可让您启用或禁用课程内容的字幕。单击它以切换字幕的开启或关闭状态。',
      portuguese: 'Este botão permite que você habilite ou desabilite legendas para o conteúdo do curso. Clique nele para ativar ou desativar as legendas.'
  },
    titles: {
      english: {
        slide: 'Slide',
        resources: 'Helpful Resources',
        menu: 'Course Menu',
        next: 'Next Slide Button',
        prev: 'Prev Slide Button',
        captions: 'Captions',
        volume: 'Volume Control'
      },
      arabic: {
        slide: 'الشريحة',
        resources: 'موارد مفيدة',
        menu: 'قائمة الدورة',
        next: 'زر التالي',
        prev: 'زر السابق',
        captions: 'الشرح',
        volume: 'تحكم تشغيل الشرائح'
      },
      urdu: {
        slide: 'سلائیڈ',
        resources: 'مددگار وسائل',
        menu: 'کورس مینو',
        next: 'اگلے سلائیڈ بٹن',
        prev: 'پچھلے سلائیڈ بٹن',
        captions: 'شرح',
        volume: 'اسلائیڈ پلے بیک کنٹرول'
      },
      dutch: {
        slide: 'Schuif',
        resources: 'Nuttige bronnen',
        menu: 'Cursusmenu',
        next: 'Volgende dia knop',
        prev: 'Vorige dia knop',
        captions: 'Bijschriften',
        volume: 'Afspelen van diavoorstelling bedienen'
      },
      spanish: {
        slide: 'Diapositiva',
        resources: 'Recursos útiles',
        menu: 'Menú del curso',
        next: 'Botón de siguiente diapositiva',
        prev: 'Botón de diapositiva anterior',
        captions: 'Subtítulos',
        volume: 'volumen'
      },
      french: {
        slide: 'Diapositive',
        resources: 'Ressources utiles',
        menu: 'Menu du cours',
        next: 'Bouton de diapositive suivante',
        prev: 'Bouton de diapositive précédente',
        captions: 'Sous-titres',
        volume: 'Contrôle de lecture des diapositives'
      },
      mandarin: {
        slide: '幻灯片',
        resources: '有用资源',
        menu: '课程菜单',
        next: '下一张幻灯片按钮',
        prev: '上一张幻灯片按钮',
        captions: '字幕',
        volume: '幻灯片播放控制'
      },
      portuguese: {
        slide: 'Slide',
        resources: 'Recursos úteis',
        menu: 'Menu do curso',
        next: 'Botão de próximo slide',
        prev: 'Botão de slide anterior',
        captions: 'Legendas',
        volume: 'Volume'
      }
    }
  }

  introJs().setOptions({
    steps: [
      {
        element: '.acc-blocker',
        intro: translations['intro'][language],
        title: translations['titles'][language]['slide'],
      },
      {
        element: '#links-right',
        intro: translations['resources'][language],
        title: translations['titles'][language]['resources'],
      },
      {
        element: '#outline-content',
        intro: translations['menu'][language],
        title: translations['titles'][language]['menu'],
      },
      {
        element: '#volume',
        intro: translations['volume'][language],
        title: translations['titles'][language]['volume'],
      },
      {
        element: '#captions',
        intro: translations['captions'][language],
        title: translations['titles'][language]['captions'],
      },
	  {
        element: '#prev',
        intro: translations['prev'][language],
        title: translations['titles'][language]['prev'],
      },
      {
        element: '#next',
        intro: translations['next'][language],
        title: translations['titles'][language]['next'],
      }
      
    ],
  }).start();
  observeHelperLayer();
}
//# sourceMappingURL=https://cdn.jsdelivr.net/gh/nrzmalik/IntroTourByNrz/nrzIntroTourMutilLang.js
