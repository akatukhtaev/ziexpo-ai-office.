'use client';

import { useState } from 'react';
import { Activity, Bot, CheckCircle2, CircleHelp, Clock3, LayoutDashboard, Play, Settings2, Sparkles, Users } from 'lucide-react';

const agents = [
  { id: 'ceo', name: 'CEO / Координатор', role: 'Распределяет задачи и собирает отчёты', emoji: '🧑‍💼', desk: 'Главный кабинет', status: 'Работает', color: '#f4b36b', task: 'Планирует выпуск на сегодня' },
  { id: 'research', name: 'Research Agent', role: 'Тренды, темы и идеи', emoji: '🔎', desk: 'Исследовательский отдел', status: 'Ожидает', color: '#8bc7a1', task: 'Ищет перспективные темы Shorts' },
  { id: 'growth', name: 'Growth Strategist', role: 'Стратегия роста канала', emoji: '📈', desk: 'Отдел роста', status: 'Ожидает', color: '#8ab8e8', task: 'Готовит гипотезы роста' },
  { id: 'script', name: 'Scriptwriter', role: 'Сценарии и хуки', emoji: '✍️', desk: 'Сценарная комната', status: 'Готов', color: '#d5a5df', task: 'Пишет сценарии роликов' },
  { id: 'video', name: 'Video Agent', role: 'Монтаж и видеопроизводство', emoji: '🎬', desk: 'Видеостудия', status: 'Ожидает', color: '#e6a18c', task: 'Готовит монтажный план' },
  { id: 'analytics', name: 'Analytics Agent', role: 'Метрики и удержание', emoji: '📊', desk: 'Аналитический отдел', status: 'Ожидает', color: '#9caddc', task: 'Сравнивает результаты роликов' },
  { id: 'quality', name: 'Quality Agent', role: 'Проверка качества и фактов', emoji: '🛡️', desk: 'Контроль качества', status: 'Готов', color: '#b4c98a', task: 'Проверяет материалы перед сдачей' },
  { id: 'publishing', name: 'Publishing Agent', role: 'Подготовка к публикации', emoji: '📤', desk: 'Публикационная зона', status: 'Ожидает', color: '#e8c46f', task: 'Готовит заголовки и описание' },
];

export default function Home() {
  const [selected, setSelected] = useState(agents[0]);
  const [tab, setTab] = useState('Офис');
  const [showTasks, setShowTasks] = useState(false);

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark">Z</div><div><b>ZIEXPO</b><small>AI OFFICE</small></div></div>
        <div className="side-label">РАБОЧЕЕ ПРОСТРАНСТВО</div>
        {[
          ['Офис', LayoutDashboard], ['Агенты', Users], ['Задачи', CheckCircle2], ['Аналитика', Activity], ['Настройки', Settings2],
        ].map(([label, Icon]: any) => <button key={label} className={`nav-item ${tab === label ? 'active' : ''}`} onClick={() => { setTab(label); setShowTasks(label === 'Задачи'); }}><Icon size={17}/>{label}</button>)}
        <div className="sidebar-bottom"><span className="online-dot"/> Система готова к настройке</div>
      </aside>

      <section className="workspace">
        <header className="topbar"><div><div className="eyebrow">ВИРТУАЛЬНЫЙ ШТАБ</div><h1>{tab === 'Офис' ? 'Добро пожаловать в офис' : tab}</h1></div><div className="top-actions"><span className="date-pill">● Локальный прототип</span><div className="avatar">Z</div></div></header>
        <div className="welcome"><div><div className="welcome-kicker"><Sparkles size={14}/> ZIEXPO AI TEAM</div><h2>Идеи превращаются<br/>в готовые видео.</h2><p>Единое пространство для команды AI-агентов YouTube-канала Ziexpo.</p><button className="primary" onClick={() => setShowTasks(!showTasks)}><Play size={15} fill="currentColor"/> {showTasks ? 'Скрыть задачи' : 'Открыть задачи'}</button></div><div className="welcome-art"><div className="sun"/><div className="pixel-window">Z!<br/><small>CREATIVE HQ</small></div><div className="plant">🌿</div></div></div>

        <div className="section-head"><div><div className="eyebrow">КОМАНДА</div><h3>Рабочие места агентов</h3></div><span className="count">{agents.length} специалистов</span></div>
        <div className="office">
          <div className="office-top"><span>ZIEXPO CREATIVE OFFICE</span><span>⌁  FLOOR 01</span></div>
          <div className="office-grid">
            {agents.map((agent, i) => <button key={agent.id} className={`agent-card ${selected.id === agent.id ? 'chosen' : ''}`} onClick={() => setSelected(agent)}>
              <div className="desk-top"><span className="desk-lamp">✦</span><span className="monitor">▰</span><span className="plant-small">♣</span></div>
              <div className="pixel-person" style={{ background: agent.color }}>{agent.emoji}</div>
              <b>{agent.name}</b><small>{agent.desk}</small><span className={`status ${agent.status === 'Работает' ? 'working' : agent.status === 'Готов' ? 'done' : ''}`}>{agent.status}</span>
            </button>)}
          </div>
          <div className="office-footer"><span>🌱 Зона отдыха</span><span>▦ Переговорная</span><span>☕ Coffee corner</span></div>
        </div>

        <div className="lower-grid">
          <section className="panel agent-detail"><div className="panel-title"><span>ПРОФИЛЬ АГЕНТА</span><Bot size={17}/></div><div className="agent-profile"><div className="big-emoji" style={{background:selected.color}}>{selected.emoji}</div><div><h3>{selected.name}</h3><p>{selected.role}</p></div></div><div className="task-line"><span>Текущая задача</span><b>{selected.task}</b></div><div className="detail-foot"><span className="status working">{selected.status}</span><span className="muted">Нажми на другого агента в офисе</span></div></section>
          <section className="panel"><div className="panel-title"><span>СВОДКА ОФИСА</span><Activity size={17}/></div><div className="metric-row"><div><strong>08</strong><small>Агентов</small></div><div><strong>02</strong><small>Готовы</small></div><div><strong>01</strong><small>Активен</small></div></div><div className="notice"><CircleHelp size={17}/><p>Это стартовый интерфейс. Реальные AI-задачи, память и подключение YouTube добавим следующими этапами.</p></div></section>
        </div>
        {showTasks && <section className="panel task-panel"><div className="panel-title"><span>ПЕРВЫЕ ЗАДАЧИ ПРОЕКТА</span><Clock3 size={17}/></div><ol><li>Подключить общую базу задач и памяти.</li><li>Настроить CEO-координатора и передачу задач агентам.</li><li>Подключить бесплатные источники трендов и данные YouTube.</li><li>Добавить видеопроизводство и очередь проверки перед публикацией.</li></ol></section>}
        <footer>ZIEXPO AI OFFICE <span>Prototype v0.1 · Рабочая сборка интерфейса</span></footer>
      </section>
    </main>
  );
}
