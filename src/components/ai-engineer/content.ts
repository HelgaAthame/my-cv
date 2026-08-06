/**
 * Content for /ai-engineer, kept out of the component so the claims can be
 * read and fact-checked without wading through markup.
 *
 * Ground rule for this file: every line here must be checkable by opening
 * the live demo or the repository. Nothing that is merely planned belongs
 * in `decisions` or `stats` — planned work goes in `roadmap`, clearly
 * labelled as such. A recruiter who finds one unverifiable claim discounts
 * all the others.
 */

export const PULSEOPS_DEMO = "https://pulse-ops-ai-five.vercel.app/";
export const PULSEOPS_REPO = "https://github.com/HelgaAthame/PulseOps-AI";
export const ENGLISH_CV = "/hr-cv";

export const stats = [
  {
    value: "4+",
    label: "года коммерческой разработки",
    sub: "React · Next.js · TypeScript",
  },
  {
    value: "20+",
    label: "проектов в продакшене",
    sub: "разные домены и размеры команд",
  },
  {
    value: "2",
    label: "модели с автофолбэком",
    sub: "AI-слой не падает от отказа провайдера",
  },
  {
    value: "1st",
    label: "место на курсе RS School React",
    sub: "и 14-е из 9000+ на JS/FE",
  },
];

/**
 * The three-column "what I actually do" block. Ordered deliberately:
 * frontend first, because that is the provable four years — leading with
 * the AI column would read as a career-changer with nothing behind it.
 */
export const capabilities = [
  {
    icon: "layout" as const,
    title: "Продуктовый фронтенд",
    body: "React и Next.js в продакшене четыре года: интерфейсы, состояние, доступность, производительность. Не «свёрстано по макету», а работающая часть продукта.",
    chips: ["React", "Next.js", "TypeScript", "Tailwind", "Redux"],
  },
  {
    icon: "database" as const,
    title: "Бэкенд и данные",
    body: "Закрываю фичу целиком: API на Node.js и NestJS, схема и запросы в PostgreSQL, интеграции по вебхукам с проверкой подписи, реалтайм.",
    chips: ["Node.js", "NestJS", "PostgreSQL", "Drizzle", "Supabase"],
  },
  {
    icon: "bot" as const,
    title: "LLM в продукте",
    body: "Довожу AI-фичу до состояния, в котором её не стыдно показать клиенту: модель отвечает по реальным данным, ошибается предсказуемо и стоит понятных денег.",
    chips: ["LLM API", "JSON Schema", "Grounding", "Фолбэк моделей"],
  },
];

/**
 * The core of the page. Each entry is a decision, not a technology: the
 * question a technical interviewer asks is "why", and a list of libraries
 * cannot answer it.
 */
export const decisions = [
  {
    title: "Модель объясняет, а не выдумывает",
    problem:
      "Если попросить LLM «найди аномалии в метриках», она найдёт их всегда — в том числе там, где их нет.",
    solution:
      "Аномалии ищет статистика: z-score по скользящему окну на 30-дневном ряде. Модель получает уже найденные отклонения и только объясняет их бизнес-смысл. Выдумать тренд она не может — его нет во входных данных.",
    tag: "Grounding",
  },
  {
    title: "Ответ модели валидируется схемой",
    problem:
      "LLM возвращает текст. Текст, вставленный в интерфейс напрямую, ломает вёрстку и молча подсовывает выдуманные числа.",
    solution:
      "Модель обязана вернуть JSON заданной формы; ответ парсится и проверяется zod-схемой. Несовпадение — это явная ошибка, которую можно повторить или показать пользователю, а не тихая порча данных.",
    tag: "Надёжность",
  },
  {
    title: "Каскад моделей вместо одного запроса",
    problem:
      "Бесплатные и дешёвые тарифы LLM-провайдеров упираются в лимиты и иногда просто зависают.",
    solution:
      "Запросы идут по очереди: сильная модель на 70B, при сбое или таймауте в 30 секунд — быстрая на 8B с более высоким дневным лимитом. У каждой попытки свой таймаут, список моделей выносится в конфиг.",
    tag: "Отказоустойчивость",
  },
  {
    title: "Отказ провайдера — это статус ответа, а не 500",
    problem:
      "Когда AI-фича падает, пользователь видит белый экран и не понимает, что делать.",
    solution:
      "Отдельные типы ошибок: «фича не настроена» превращается в 503 с понятным текстом, исчерпанный лимит — в 429. Остальная часть приложения продолжает работать: метрики и графики считаются без всякого AI.",
    tag: "Деградация",
  },
  {
    title: "Компактный срез данных вместо сырых событий",
    problem:
      "Отправлять модели весь поток событий — это дорого, медленно и упирается в контекстное окно.",
    solution:
      "Собирается сжатый снапшот: агрегаты, дневной ряд за 30 дней, разбивка по типам событий, найденные аномалии. Числа округляются перед отправкой. Сигнала достаточно, а расход токенов предсказуем.",
    tag: "Стоимость",
  },
  {
    title: "Тестируется то, что несёт риск",
    problem:
      "Покрывать тестами разметку — дорого и бессмысленно. Ошибка в расчёте MRR — это неверные решения у клиента.",
    solution:
      "Тестами покрыт слой метрик: расчёт аналитики, детект аномалий, когортное удержание, движение MRR, разбор Stripe-вебхуков и проверка подписи. Vitest, без браузера — чистая доменная логика.",
    tag: "Качество",
  },
];

/** Shown as an honest "in progress" block — see the ground rule above. */
export const roadmap = [
  "Стриминг ответа: переход на streamObject, чтобы инсайты появлялись по мере генерации, с возможностью прервать запрос",
  "Агент с инструментами: модель сама решает, какие данные запросить — метрика за период, сравнение периодов, разрез по клиентам — вместо готового снапшота",
  "Учёт стоимости: логирование токенов и цены каждого запроса, экран статистики расхода",
  "Набор эталонных вопросов с проверкой ответов, чтобы точность выражалась числом, а не ощущением",
];

export const stack = {
  "Языки и фреймворки": ["TypeScript", "JavaScript", "React", "Next.js", "Node.js", "NestJS"],
  "Данные": ["PostgreSQL", "MongoDB", "Drizzle ORM", "Prisma", "Supabase", "Redis"],
  "AI": ["LLM API", "Groq", "OpenAI API", "JSON Schema / zod", "Промпт-инжиниринг"],
  "Интерфейс": ["Tailwind CSS", "Redux Toolkit", "SCSS", "WebGL2 / PixiJS", "Доступность (ARIA)"],
  "Инженерия": ["Vitest", "Git", "Docker", "Vercel", "CI на GitHub Actions"],
};

export const experience = [
  {
    role: "Frontend Developer",
    company: "Laboratory42",
    period: "июнь 2023 — по настоящее время",
    points: [
      "Разработка и поддержка клиентских приложений на React и Next.js",
      "Работа в кросс-функциональной команде: от постановки задачи до релиза",
      "Адаптивные и доступные интерфейсы",
    ],
  },
  {
    role: "Frontend Developer",
    company: "CreativeIT",
    period: "август 2021 — апрель 2023",
    points: [
      "Клиентская часть коммерческих проектов на React и TypeScript",
      "Работа с несколькими проектами и командами параллельно",
    ],
  },
];
