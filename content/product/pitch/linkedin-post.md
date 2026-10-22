# LinkedIn: пост для инвесторов

Картинка: `pitch/images/linkedin-post.png` (1200×1200). Исходник карточки — `pitch/linkedin-card.html`, фон — `pitch/images/linkedin-bg.png` (ComfyUI, Flux dev).

## Текст (EN, для публикации)

Companies now pay for AI coding agents at scale. Almost none of them can control those agents.

That gap is what I'm building ProjectHub for.

Why now:
→ Enterprise spend on AI coding went from ~$550M in 2024 to $4.0B in 2025 (Menlo Ventures).
→ Gartner renamed its Magic Quadrant to "Enterprise AI Coding Agents" and expects governance and validation to move into dedicated platforms.
→ 97% of enterprise teams use AI coding tools; only 30% have full governance over them (Black Duck, 2026).
→ Cost is the new pain: Uber reportedly capped AI tools at $1,500 per engineer per month after burning its annual budget in four months.

The gap: GitHub, OpenAI, Google and Cursor orchestrate their own agents. Independent orchestrators are free and stop at the UI. Nobody owns the neutral layer a company needs across every agent it runs: policies, audit, budgets, and proof that the work is actually done.

ProjectHub is that layer — a vendor-neutral control room for AI coding agents. Any agent, any model (Claude Code, Codex, Antigravity, local models). Risky steps wait for a human. Acceptance criteria are checked by the system, not by the agent that wrote the code. Cost is tracked per task. Everything runs inside the customer's perimeter.

Why it can win:
• Neutrality is the moat. A company running three vendors won't let one of them govern the other two.
• Control is where the money is. Orchestration UIs are free; governance, audit and budgets are what teams pay for.
• Open core: a free MIT client as the funnel, Team at $25–40 per seat (Copilot Enterprise is $39, Cursor Teams $40), Enterprise as an annual on-prem license.

Proof the approach works: ProjectHub was built by AI agents using its own methodology — 7 weeks from the first commit, ~123K lines of TypeScript, 168 tasks closed, 76 architecture decisions, 213 test files.

Honest status: v0.1.0, pre-revenue, no external users yet.

Next 12 months:
1. Design partners: 5–10 teams, measuring cost per task, cycle time and acceptance rate before and after.
2. Team edition: several people work in one project on one shared machine, each in their own branch with their own agents; finished work merges through a queue that checks it against the latest main and requires review by someone other than the author.
3. Enterprise: on-prem and air-gapped deployments for regulated industries.

I'm open to conversations with investors in dev tools and AI infrastructure, and I'm looking for engineering teams that want to pilot it. If that's you, comment or DM me — happy to share the deck.

#AIagents #DevTools #Founders #Startups #AgenticAI

## Перевод (RU, для себя)

Компании уже массово платят за AI-агентов для кода. Почти никто из них не может этих агентов контролировать.

Ради этого разрыва я делаю ProjectHub.

Почему сейчас:
→ Расходы компаний на AI-кодинг выросли с ~$550 млн в 2024 году до $4,0 млрд в 2025-м (Menlo Ventures).
→ Gartner переименовал Magic Quadrant в «Enterprise AI Coding Agents» и ждёт, что контроль и проверка уйдут в отдельные платформы.
→ AI-инструментами пользуются 97% корпоративных команд, полный контроль над ними — у 30% (Black Duck, 2026).
→ Стоимость — новая боль: Uber, по сообщениям прессы, ограничил AI-инструменты $1 500 на инженера в месяц, израсходовав годовой бюджет за четыре месяца.

Разрыв: GitHub, OpenAI, Google и Cursor оркестрируют своих агентов. Независимые оркестраторы бесплатны и заканчиваются на интерфейсе. Нейтральный слой, который нужен компании поверх всех её агентов, — правила, аудит, бюджеты и доказательство, что работа действительно сделана, — не занят никем.

ProjectHub — этот слой: нейтральный пульт управления AI-агентами для кода. Любой агент и любая модель (Claude Code, Codex, Antigravity, локальные модели). Рискованные шаги ждут человека. Критерии приёмки проверяет система, а не агент, написавший код. Стоимость считается по задачам. Всё работает в контуре клиента.

Почему это может победить:
• Нейтральность — это защита. Компания с тремя вендорами не даст одному из них контролировать двух других.
• Деньги — в контроле. Интерфейсы оркестрации бесплатны; платят за правила, аудит и бюджеты.
• Open core: бесплатный клиент под MIT как воронка, Team за $25–40 за место (Copilot Enterprise — $39, Cursor Teams — $40), Enterprise — годовая on-prem лицензия.

Доказательство подхода: ProjectHub построен AI-агентами по собственной методологии — 7 недель от первого коммита, ~123 тыс. строк TypeScript, 168 закрытых задач, 76 архитектурных решений, 213 файлов тестов.

Честный статус: версия 0.1.0, выручки нет, внешних пользователей пока нет.

Следующие 12 месяцев:
1. Партнёры по дизайну: 5–10 команд, замеры стоимости задачи, времени цикла и доли принятых результатов до и после.
2. Team-редакция: несколько человек работают в одном проекте на одной общей машине, у каждого своя ветка и свои агенты; готовая работа сливается через очередь с проверкой на актуальной основной ветке и ревью не автором.
3. Enterprise: on-prem и air-gapped развёртывания для регулируемых отраслей.

Открыт к разговору с инвесторами в инструменты для разработчиков и AI-инфраструктуру и ищу инженерные команды, которые хотят попробовать продукт в пилоте. Если это про вас — напишите в комментариях или в личку, пришлю презентацию.

## Как публиковать

- Картинку прикрепить к посту; ссылку на репозиторий или сайт — первым комментарием, а не в тексте (LinkedIn режет охват постов со ссылками).
- Презентацию `ProjectHub-pitch-en.pdf` отправлять в личку по запросу, а не выкладывать в пост: в ней есть неподтверждённые цифры 2026 года (см. слайд «Источники»).
