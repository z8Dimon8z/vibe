// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Свой код пишем здесь
// библиотка fansybox предварительно установить через nodemodules
// документация https://fancyapps.com/fancybox/getting-started/

import {
  Fancybox
} from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

