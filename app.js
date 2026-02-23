// ═══════════════════════════════════════════
//  FitForge — Workout Tracker Application
// ═══════════════════════════════════════════

const app = (() => {

  // ─── Exercise Library ────────────────────
  const EXERCISE_DB = [
    // Chest
    { id: 'bench_press', name: 'Bench Press', muscle: 'Chest', equipment: 'Barbell', emoji: '🏋️' },
    { id: 'incline_bench', name: 'Incline Bench Press', muscle: 'Chest', equipment: 'Barbell', emoji: '🏋️' },
    { id: 'dumbbell_press', name: 'Dumbbell Press', muscle: 'Chest', equipment: 'Dumbbell', emoji: '💪' },
    { id: 'incline_db_press', name: 'Incline Dumbbell Press', muscle: 'Chest', equipment: 'Dumbbell', emoji: '💪' },
    { id: 'chest_fly', name: 'Cable Fly', muscle: 'Chest', equipment: 'Cable', emoji: '🦅' },
    { id: 'dumbbell_fly', name: 'Dumbbell Fly', muscle: 'Chest', equipment: 'Dumbbell', emoji: '🦅' },
    { id: 'push_ups', name: 'Push Ups', muscle: 'Chest', equipment: 'Bodyweight', emoji: '🤸' },
    { id: 'dips', name: 'Dips', muscle: 'Chest', equipment: 'Bodyweight', emoji: '🤸' },
    { id: 'weighted_dips', name: 'Weighted Dips', muscle: 'Chest', equipment: 'Bodyweight', emoji: '🤸' },

    // Back
    { id: 'deadlift', name: 'Deadlift', muscle: 'Back', equipment: 'Barbell', emoji: '🏋️' },
    { id: 'barbell_row', name: 'Barbell Row', muscle: 'Back', equipment: 'Barbell', emoji: '🚣' },
    { id: 'pull_ups', name: 'Pull Ups', muscle: 'Back', equipment: 'Bodyweight', emoji: '🤸' },
    { id: 'chin_ups', name: 'Chin Ups', muscle: 'Back', equipment: 'Bodyweight', emoji: '🤸' },
    { id: 'dumbbell_shrugs', name: 'Dumbbell Shrugs', muscle: 'Back', equipment: 'Dumbbell', emoji: '💪' },
    { id: 'lat_pulldown', name: 'Lat Pulldown', muscle: 'Back', equipment: 'Cable', emoji: '🔽' },
    { id: 'seated_row', name: 'Seated Cable Row', muscle: 'Back', equipment: 'Cable', emoji: '🚣' },
    { id: 'dumbbell_row', name: 'Dumbbell Row', muscle: 'Back', equipment: 'Dumbbell', emoji: '💪' },
    { id: 't_bar_row', name: 'T-Bar Row', muscle: 'Back', equipment: 'Barbell', emoji: '🚣' },

    // Shoulders
    { id: 'ohp', name: 'Overhead Press', muscle: 'Shoulders', equipment: 'Barbell', emoji: '🏋️' },
    { id: 'db_shoulder_press', name: 'Dumbbell Shoulder Press', muscle: 'Shoulders', equipment: 'Dumbbell', emoji: '💪' },
    { id: 'lateral_raise', name: 'Lateral Raise', muscle: 'Shoulders', equipment: 'Dumbbell', emoji: '🦅' },
    { id: 'front_raise', name: 'Front Raise', muscle: 'Shoulders', equipment: 'Dumbbell', emoji: '🦅' },
    { id: 'face_pull', name: 'Face Pull', muscle: 'Shoulders', equipment: 'Cable', emoji: '🔄' },
    { id: 'reverse_fly', name: 'Reverse Fly', muscle: 'Shoulders', equipment: 'Dumbbell', emoji: '🦅' },
    { id: 'cable_lateral_raise', name: 'Single-Arm Cable Lateral Raise', muscle: 'Shoulders', equipment: 'Cable', emoji: '🦅' },
    { id: 'reverse_pec_deck', name: 'Reverse Pec Deck', muscle: 'Shoulders', equipment: 'Machine', emoji: '🔄' },

    // Arms
    { id: 'barbell_curl', name: 'Barbell Curl', muscle: 'Arms', equipment: 'Barbell', emoji: '💪' },
    { id: 'dumbbell_curl', name: 'Dumbbell Curl', muscle: 'Arms', equipment: 'Dumbbell', emoji: '💪' },
    { id: 'hammer_curl', name: 'Hammer Curl', muscle: 'Arms', equipment: 'Dumbbell', emoji: '🔨' },
    { id: 'tricep_pushdown', name: 'Tricep Pushdown', muscle: 'Arms', equipment: 'Cable', emoji: '🔽' },
    { id: 'skull_crushers', name: 'Skull Crushers', muscle: 'Arms', equipment: 'Barbell', emoji: '💀' },
    { id: 'overhead_extension', name: 'Overhead Tricep Extension', muscle: 'Arms', equipment: 'Dumbbell', emoji: '💪' },
    { id: 'preacher_curl', name: 'Preacher Curl', muscle: 'Arms', equipment: 'Barbell', emoji: '💪' },
    { id: 'incline_db_curl', name: 'Incline Dumbbell Curl', muscle: 'Arms', equipment: 'Dumbbell', emoji: '💪' },

    // Legs
    { id: 'squat', name: 'Squat', muscle: 'Legs', equipment: 'Barbell', emoji: '🏋️' },
    { id: 'front_squat', name: 'Front Squat', muscle: 'Legs', equipment: 'Barbell', emoji: '🏋️' },
    { id: 'leg_press', name: 'Leg Press', muscle: 'Legs', equipment: 'Machine', emoji: '🦵' },
    { id: 'lunges', name: 'Lunges', muscle: 'Legs', equipment: 'Dumbbell', emoji: '🚶' },
    { id: 'walking_lunges', name: 'Walking Lunges', muscle: 'Legs', equipment: 'Dumbbell', emoji: '🚶' },
    { id: 'romanian_dl', name: 'Romanian Deadlift', muscle: 'Legs', equipment: 'Barbell', emoji: '🏋️' },
    { id: 'leg_curl', name: 'Lying Leg Curl', muscle: 'Legs', equipment: 'Machine', emoji: '🦵' },
    { id: 'seated_leg_curl', name: 'Seated Leg Curl', muscle: 'Legs', equipment: 'Machine', emoji: '🦵' },
    { id: 'leg_extension', name: 'Leg Extension', muscle: 'Legs', equipment: 'Machine', emoji: '🦵' },
    { id: 'calf_raise', name: 'Standing Calf Raise', muscle: 'Legs', equipment: 'Machine', emoji: '🦶' },
    { id: 'seated_calf_raise', name: 'Seated Calf Raise', muscle: 'Legs', equipment: 'Machine', emoji: '🦶' },
    { id: 'goblet_squat', name: 'Goblet Squat', muscle: 'Legs', equipment: 'Dumbbell', emoji: '🏋️' },
    { id: 'hip_thrust', name: 'Hip Thrust', muscle: 'Legs', equipment: 'Barbell', emoji: '🏋️' },
    { id: 'bulgarian_split', name: 'Bulgarian Split Squat', muscle: 'Legs', equipment: 'Dumbbell', emoji: '🚶' },

    // Core
    { id: 'plank', name: 'Plank', muscle: 'Core', equipment: 'Bodyweight', emoji: '🧘' },
    { id: 'crunches', name: 'Crunches', muscle: 'Core', equipment: 'Bodyweight', emoji: '🧘' },
    { id: 'hanging_leg_raise', name: 'Hanging Leg Raise', muscle: 'Core', equipment: 'Bodyweight', emoji: '🤸' },
    { id: 'cable_crunch', name: 'Cable Crunch', muscle: 'Core', equipment: 'Cable', emoji: '🔄' },
    { id: 'russian_twist', name: 'Russian Twist', muscle: 'Core', equipment: 'Bodyweight', emoji: '🔄' },
    { id: 'ab_wheel', name: 'Ab Wheel Rollout', muscle: 'Core', equipment: 'Bodyweight', emoji: '🛞' },

    // Cardio
    { id: 'treadmill', name: 'Treadmill', muscle: 'Cardio', equipment: 'Machine', emoji: '🏃' },
    { id: 'cycling', name: 'Cycling', muscle: 'Cardio', equipment: 'Machine', emoji: '🚴' },
    { id: 'rowing', name: 'Rowing Machine', muscle: 'Cardio', equipment: 'Machine', emoji: '🚣' },
    { id: 'jump_rope', name: 'Jump Rope', muscle: 'Cardio', equipment: 'Bodyweight', emoji: '🤸' },
  ];

  const MUSCLE_GROUPS = ['All', 'Chest', 'Back', 'Shoulders', 'Arms', 'Legs', 'Core', 'Cardio'];

  const MUSCLE_COLORS = {
    Chest: '#ef4444',
    Back: '#3b82f6',
    Shoulders: '#f59e0b',
    Arms: '#a855f7',
    Legs: '#22c55e',
    Core: '#06b6d4',
    Cardio: '#ec4899'
  };

  // ─── Exercise Image Map (verified from Wger API) ───
  const WGER_IMG = 'https://wger.de/media/exercise-images';
  const EXERCISE_IMAGES = {
    'Bench Press': `${WGER_IMG}/192/Bench-press-1.png`,
    'Incline Bench Press': `${WGER_IMG}/41/Incline-bench-press-1.png`,
    'Dumbbell Press': `${WGER_IMG}/97/Dumbbell-bench-press-1.png`,
    'Incline Dumbbell Press': `${WGER_IMG}/16/Incline-press-1.png`,
    'Cable Fly': `${WGER_IMG}/122/Incline-cable-flyes-1.png`,
    'Dumbbell Fly': `${WGER_IMG}/238/2fc242d3-5bdd-4f97-99bd-678adb8c96fc.png`,
    'Push Ups': `${WGER_IMG}/1551/a6a9e561-3965-45c6-9f2b-ee671e1a3a45.png`,
    'Dips': `${WGER_IMG}/83/Bench-dips-1.png`,
    'Weighted Dips': `${WGER_IMG}/83/Bench-dips-1.png`,
    'Deadlift': `${WGER_IMG}/184/1709c405-620a-4d07-9658-fade2b66a2df.jpeg`,
    'Barbell Row': `${WGER_IMG}/109/Barbell-rear-delt-row-1.png`,
    'Pull Ups': `${WGER_IMG}/475/b0554016-16fd-4dbe-be47-a2a17d16ae0e.jpg`,
    'Chin Ups': `${WGER_IMG}/181/Chin-ups-2.png`,
    'Dumbbell Shrugs': `${WGER_IMG}/151/Dumbbell-shrugs-2.png`,
    'Lat Pulldown': `${WGER_IMG}/158/02e8a7c3-dc67-434e-a4bc-77fdecf84b49.webp`,
    'Seated Cable Row': `${WGER_IMG}/1117/e74255c0-67a0-4309-b78d-2d79e6ff8c11.png`,
    'Dumbbell Row': `${WGER_IMG}/81/a751a438-ae2d-4751-8d61-cef0e9292174.png`,
    'T-Bar Row': `${WGER_IMG}/106/T-bar-row-1.png`,
    'Overhead Press': `${WGER_IMG}/119/seated-barbell-shoulder-press-large-1.png`,
    'Dumbbell Shoulder Press': `${WGER_IMG}/123/dumbbell-shoulder-press-large-1.png`,
    'Lateral Raise': `${WGER_IMG}/148/lateral-dumbbell-raises-large-2.png`,
    'Front Raise': `${WGER_IMG}/256/b7def5bc-2352-499b-b9e5-fff741003831.png`,
    'Face Pull': `${WGER_IMG}/1639/8927346e-f5ca-4795-bdf1-5ac9309401e7.webp`,
    'Reverse Fly': `${WGER_IMG}/822/74affc0d-03b6-4f33-b5f4-a822a2615f68.png`,
    'Single-Arm Cable Lateral Raise': `${WGER_IMG}/1378/7c1fcf34-fb7e-45e7-a0c1-51f296235315.jpg`,
    'Reverse Pec Deck': `${WGER_IMG}/822/74affc0d-03b6-4f33-b5f4-a822a2615f68.png`,
    'Barbell Curl': `${WGER_IMG}/74/Bicep-curls-1.png`,
    'Dumbbell Curl': `${WGER_IMG}/81/Biceps-curl-1.png`,
    'Hammer Curl': `${WGER_IMG}/138/Hammer-curls-with-rope-1.png`,
    'Tricep Pushdown': `${WGER_IMG}/659/a60452f1-e2ea-43fe-baa6-c1a2208d060c.png`,
    'Skull Crushers': `${WGER_IMG}/50/695ced5c-9961-4076-add2-cb250d01089e.png`,
    'Overhead Tricep Extension': `${WGER_IMG}/1336/ebf88217-df26-4ef7-94cb-f0c2220c6abe.webp`,
    'Preacher Curl': `${WGER_IMG}/74/Bicep-curls-1.png`,
    'Incline Dumbbell Curl': `${WGER_IMG}/81/Biceps-curl-1.png`,
    'Squat': `${WGER_IMG}/1627/86d0b85a-66b7-4e5f-bf8d-bb4d7eb03f59.webp`,
    'Front Squat': `${WGER_IMG}/191/Front-squat-1-857x1024.png`,
    'Leg Press': `${WGER_IMG}/371/d2136f96-3a43-4d4c-9944-1919c4ca1ce1.webp`,
    'Lunges': `${WGER_IMG}/113/Walking-lunges-1.png`,
    'Walking Lunges': `${WGER_IMG}/113/Walking-lunges-1.png`,
    'Romanian Deadlift': `${WGER_IMG}/1750/c5ff74e1-b494-4df0-a13f-89c630b88ef9.webp`,
    'Lying Leg Curl': `${WGER_IMG}/373/60e2aa21-1910-40d3-9fed-babfee06dd48.png`,
    'Seated Leg Curl': `${WGER_IMG}/373/60e2aa21-1910-40d3-9fed-babfee06dd48.png`,
    'Leg Extension': `${WGER_IMG}/373/60e2aa21-1910-40d3-9fed-babfee06dd48.png`,
    'Standing Calf Raise': `${WGER_IMG}/622/9a429bd0-afd3-4ad0-8043-e9beec901c81.jpeg`,
    'Seated Calf Raise': `${WGER_IMG}/1620/edd40e39-e337-4460-a8dd-6127d40ddd16.jpeg`,
    'Goblet Squat': `${WGER_IMG}/203/1c052351-2af0-4227-aeb0-244008e4b0a8.jpeg`,
    'Hip Thrust': `${WGER_IMG}/1614/7f3cfae2-e062-4211-9a6b-5a10851ce7f4.jpg`,
    'Bulgarian Split Squat': `${WGER_IMG}/988/6283b258-a4d7-4833-84f7-a38987022d3d.png`,
    'Crunches': `${WGER_IMG}/91/Crunches-1.png`,
    'Hanging Leg Raise': `${WGER_IMG}/125/Leg-raises-2.png`,
  };

  function getExerciseImageHtml(name, emoji, size = 42) {
    const url = EXERCISE_IMAGES[name];
    if (url) {
      return `<div class="exercise-icon exercise-img-icon" style="width:${size}px;height:${size}px;" onclick="event.stopPropagation();app.showImagePreview('${escapeHtml(name).replace(/'/g, "\\'")}')">
        <img src="${url}" alt="${escapeHtml(name)}" class="exercise-img" 
          onerror="this.parentElement.innerHTML='${emoji}'">
      </div>`;
    }
    return `<div class="exercise-icon" style="width:${size}px;height:${size}px;">${emoji}</div>`;
  }

  function showImagePreview(name) {
    const url = EXERCISE_IMAGES[name];
    if (!url) return;
    const modal = document.getElementById('image-preview-modal');
    document.getElementById('preview-image').src = url;
    document.getElementById('preview-title').textContent = name;
    modal.classList.add('active');
  }

  // ─── State ───────────────────────────────
  let state = {
    currentView: 'dashboard',
    workouts: [],        // saved workouts
    templates: [],       // workout templates
    activeWorkout: null, // current workout in progress
    unit: 'kg',
    workoutStartTime: null,
    timerInterval: null,
    restTimerInterval: null,
    restSeconds: 90,
    restRemaining: 0,
    selectedMuscle: 'All',
    pickerMuscle: 'All',
    autoRestTimer: true,
  };

  // ─── Init ────────────────────────────────
  function init() {
    loadState();
    updateGreeting();
    renderMuscleFilters();
    renderExerciseList();
    renderDashboard();
    renderHistory();
    renderProgress();

    // Close modals on backdrop click
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) {
          overlay.classList.remove('active');
          stopRestCountdown();
        }
      });
    });
  }

  // ─── Persistence ─────────────────────────
  // ─── Default PPL Templates ───────────────
  const DEFAULT_TEMPLATES = [
    {
      name: 'Push (Day 1)',
      exercises: [
        {
          id: 'bench_press', name: 'Bench Press', emoji: '🏋️', muscle: 'Chest', sets: [
            { weight: '50', reps: '10' }, { weight: '50', reps: '10' }, { weight: '60', reps: '8' }, { weight: '60', reps: '8' }
          ]
        },
        {
          id: 'ohp', name: 'Overhead Press', emoji: '🏋️', muscle: 'Shoulders', sets: [
            { weight: '20', reps: '10' }, { weight: '20', reps: '10' }, { weight: '20', reps: '10' }
          ]
        },
        {
          id: 'incline_db_press', name: 'Incline Dumbbell Press', emoji: '💪', muscle: 'Chest', sets: [
            { weight: '26', reps: '10' }, { weight: '26', reps: '10' }, { weight: '26', reps: '10' }
          ]
        },
        {
          id: 'lateral_raise', name: 'Lateral Raise', emoji: '🦅', muscle: 'Shoulders', sets: [
            { weight: '12', reps: '12' }, { weight: '12', reps: '12' }, { weight: '12', reps: '12' }, { weight: '12', reps: '12' }
          ]
        },
        {
          id: 'tricep_pushdown', name: 'Tricep Pushdown', emoji: '🔽', muscle: 'Arms', sets: [
            { weight: '18', reps: '12' }, { weight: '18', reps: '12' }, { weight: '18', reps: '12' }
          ]
        },
        {
          id: 'overhead_extension', name: 'Overhead Tricep Extension', emoji: '💪', muscle: 'Arms', sets: [
            { weight: '18', reps: '10' }, { weight: '18', reps: '10' }, { weight: '18', reps: '10' }
          ]
        }
      ]
    },
    {
      name: 'Pull (Day 2)',
      exercises: [
        {
          id: 'pull_ups', name: 'Pull Ups', emoji: '🤸', muscle: 'Back', sets: [
            { weight: '66', reps: '8' }, { weight: '66', reps: '8' }, { weight: '66', reps: '8' }, { weight: '66', reps: '8' }
          ]
        },
        {
          id: 'barbell_row', name: 'Barbell Row', emoji: '🚣', muscle: 'Back', sets: [
            { weight: '60', reps: '10' }, { weight: '60', reps: '10' }, { weight: '60', reps: '10' }, { weight: '70', reps: '8' }
          ]
        },
        {
          id: 'seated_row', name: 'Seated Cable Row', emoji: '🚣', muscle: 'Back', sets: [
            { weight: '66', reps: '10' }, { weight: '66', reps: '10' }, { weight: '66', reps: '10' }
          ]
        },
        {
          id: 'face_pull', name: 'Face Pull', emoji: '🔄', muscle: 'Shoulders', sets: [
            { weight: '18', reps: '15' }, { weight: '18', reps: '15' }, { weight: '18', reps: '15' }, { weight: '18', reps: '15' }
          ]
        },
        {
          id: 'barbell_curl', name: 'Barbell Curl', emoji: '💪', muscle: 'Arms', sets: [
            { weight: '10', reps: '10' }, { weight: '10', reps: '10' }, { weight: '10', reps: '10' }
          ]
        },
        {
          id: 'hammer_curl', name: 'Hammer Curl', emoji: '🔨', muscle: 'Arms', sets: [
            { weight: '14', reps: '10' }, { weight: '14', reps: '10' }, { weight: '14', reps: '10' }
          ]
        }
      ]
    },
    {
      name: 'Legs (Day 3)',
      exercises: [
        {
          id: 'squat', name: 'Squat', emoji: '🏋️', muscle: 'Legs', sets: [
            { weight: '50', reps: '8' }, { weight: '50', reps: '8' }, { weight: '50', reps: '8' }, { weight: '50', reps: '8' }
          ]
        },
        {
          id: 'romanian_dl', name: 'Romanian Deadlift', emoji: '🏋️', muscle: 'Legs', sets: [
            { weight: '50', reps: '10' }, { weight: '50', reps: '10' }, { weight: '50', reps: '10' }, { weight: '50', reps: '10' }
          ]
        },
        {
          id: 'bulgarian_split', name: 'Bulgarian Split Squat', emoji: '🚶', muscle: 'Legs', sets: [
            { weight: '0', reps: '10' }, { weight: '0', reps: '10' }, { weight: '0', reps: '10' }
          ]
        },
        {
          id: 'leg_extension', name: 'Leg Extension', emoji: '🦵', muscle: 'Legs', sets: [
            { weight: '40', reps: '15' }, { weight: '40', reps: '15' }, { weight: '40', reps: '15' }
          ]
        },
        {
          id: 'leg_curl', name: 'Lying Leg Curl', emoji: '🦵', muscle: 'Legs', sets: [
            { weight: '40', reps: '12' }, { weight: '40', reps: '12' }, { weight: '40', reps: '12' }
          ]
        },
        {
          id: 'calf_raise', name: 'Standing Calf Raise', emoji: '🦶', muscle: 'Legs', sets: [
            { weight: '100', reps: '15' }, { weight: '100', reps: '15' }, { weight: '100', reps: '15' }, { weight: '100', reps: '15' }
          ]
        }
      ]
    },
    {
      name: 'Push (Day 5)',
      exercises: [
        {
          id: 'incline_bench', name: 'Incline Bench Press', emoji: '🏋️', muscle: 'Chest', sets: [
            { weight: '25', reps: '8' }, { weight: '25', reps: '8' }, { weight: '25', reps: '8' }, { weight: '25', reps: '8' }
          ]
        },
        {
          id: 'db_shoulder_press', name: 'Dumbbell Shoulder Press', emoji: '💪', muscle: 'Shoulders', sets: [
            { weight: '24', reps: '10' }, { weight: '24', reps: '10' }, { weight: '24', reps: '10' }
          ]
        },
        {
          id: 'weighted_dips', name: 'Weighted Dips', emoji: '🤸', muscle: 'Chest', sets: [
            { weight: '25', reps: '10' }, { weight: '25', reps: '10' }, { weight: '25', reps: '10' }
          ]
        },
        {
          id: 'chest_fly', name: 'Cable Fly', emoji: '🦅', muscle: 'Chest', sets: [
            { weight: '5.7', reps: '12' }, { weight: '5.7', reps: '12' }, { weight: '5.7', reps: '12' }
          ]
        },
        {
          id: 'skull_crushers', name: 'Skull Crushers', emoji: '💀', muscle: 'Arms', sets: [
            { weight: '5', reps: '10' }, { weight: '5', reps: '10' }, { weight: '5', reps: '10' }
          ]
        },
        {
          id: 'cable_lateral_raise', name: 'Single-Arm Cable Lateral Raise', emoji: '🦅', muscle: 'Shoulders', sets: [
            { weight: '5.7', reps: '12' }, { weight: '5.7', reps: '12' }, { weight: '5.7', reps: '12' }
          ]
        }
      ]
    },
    {
      name: 'Pull (Day 6)',
      exercises: [
        {
          id: 'chin_ups', name: 'Chin Ups', emoji: '🤸', muscle: 'Back', sets: [
            { weight: '', reps: '' }, { weight: '', reps: '' }, { weight: '', reps: '' }, { weight: '', reps: '' }
          ]
        },
        {
          id: 'dumbbell_row', name: 'Dumbbell Row', emoji: '💪', muscle: 'Back', sets: [
            { weight: '', reps: '10' }, { weight: '', reps: '10' }, { weight: '', reps: '10' }, { weight: '', reps: '10' }
          ]
        },
        {
          id: 'lat_pulldown', name: 'Lat Pulldown', emoji: '🔽', muscle: 'Back', sets: [
            { weight: '', reps: '10' }, { weight: '', reps: '10' }, { weight: '', reps: '10' }
          ]
        },
        {
          id: 'dumbbell_shrugs', name: 'Dumbbell Shrugs', emoji: '💪', muscle: 'Back', sets: [
            { weight: '', reps: '12' }, { weight: '', reps: '12' }, { weight: '', reps: '12' }, { weight: '', reps: '12' }
          ]
        },
        {
          id: 'incline_db_curl', name: 'Incline Dumbbell Curl', emoji: '💪', muscle: 'Arms', sets: [
            { weight: '', reps: '10' }, { weight: '', reps: '10' }, { weight: '', reps: '10' }
          ]
        },
        {
          id: 'reverse_pec_deck', name: 'Reverse Pec Deck', emoji: '🔄', muscle: 'Shoulders', sets: [
            { weight: '', reps: '15' }, { weight: '', reps: '15' }, { weight: '', reps: '15' }
          ]
        }
      ]
    },
    {
      name: 'Legs (Day 7)',
      exercises: [
        {
          id: 'leg_press', name: 'Leg Press', emoji: '🦵', muscle: 'Legs', sets: [
            { weight: '', reps: '10' }, { weight: '', reps: '10' }, { weight: '', reps: '10' }, { weight: '', reps: '10' }
          ]
        },
        {
          id: 'hip_thrust', name: 'Hip Thrust', emoji: '🏋️', muscle: 'Legs', sets: [
            { weight: '', reps: '10' }, { weight: '', reps: '10' }, { weight: '', reps: '10' }, { weight: '', reps: '10' }
          ]
        },
        {
          id: 'walking_lunges', name: 'Walking Lunges', emoji: '🚶', muscle: 'Legs', sets: [
            { weight: '', reps: '12' }, { weight: '', reps: '12' }, { weight: '', reps: '12' }
          ]
        },
        {
          id: 'seated_leg_curl', name: 'Seated Leg Curl', emoji: '🦵', muscle: 'Legs', sets: [
            { weight: '', reps: '12' }, { weight: '', reps: '12' }, { weight: '', reps: '12' }
          ]
        },
        {
          id: 'goblet_squat', name: 'Goblet Squat', emoji: '🏋️', muscle: 'Legs', sets: [
            { weight: '', reps: '15' }, { weight: '', reps: '15' }, { weight: '', reps: '15' }
          ]
        },
        {
          id: 'seated_calf_raise', name: 'Seated Calf Raise', emoji: '🦶', muscle: 'Legs', sets: [
            { weight: '', reps: '15' }, { weight: '', reps: '15' }, { weight: '', reps: '15' }, { weight: '', reps: '15' }
          ]
        }
      ]
    }
  ];

  function loadState() {
    try {
      const saved = localStorage.getItem('fitforge_data');
      if (saved) {
        const data = JSON.parse(saved);
        state.workouts = data.workouts || [];
        state.templates = data.templates || [];
        state.unit = data.unit || 'kg';
        state.activeWorkout = data.activeWorkout || null;
        state.workoutStartTime = data.workoutStartTime ? new Date(data.workoutStartTime) : null;

        // Restore unit toggle
        document.querySelectorAll('.unit-option').forEach(el => {
          el.classList.toggle('active', el.dataset.unit === state.unit);
        });

        // Resume active workout timer
        if (state.activeWorkout && state.workoutStartTime) {
          startTimer();
          showWorkoutActive(true);
          renderWorkoutExercises();
        }

        // Restore auto-rest settings
        if (typeof data.autoRestTimer === 'boolean') {
          state.autoRestTimer = data.autoRestTimer;
        }
        if (data.restSeconds) {
          state.restSeconds = data.restSeconds;
          state.restRemaining = data.restSeconds;
        }

        // Sync auto-rest button UI
        const autoRestBtn = document.getElementById('auto-rest-toggle');
        if (autoRestBtn) {
          autoRestBtn.classList.toggle('active', state.autoRestTimer);
          autoRestBtn.textContent = state.autoRestTimer ? '⏱ Auto Rest: ON' : '⏱ Auto Rest: OFF';
        }

        // Sync rest preset buttons
        document.querySelectorAll('.rest-preset').forEach(btn => {
          btn.classList.toggle('active', parseInt(btn.dataset.seconds) === state.restSeconds);
        });

        // Restore the last viewed page
        if (data.currentView) {
          navigate(data.currentView);
        }
      }

      // Load default PPL templates if no templates exist
      if (state.templates.length === 0) {
        state.templates = JSON.parse(JSON.stringify(DEFAULT_TEMPLATES));
        saveState();
      }
    } catch (e) {
      console.error('Failed to load state:', e);
    }
  }

  function saveState() {
    try {
      localStorage.setItem('fitforge_data', JSON.stringify({
        workouts: state.workouts,
        templates: state.templates,
        unit: state.unit,
        activeWorkout: state.activeWorkout,
        workoutStartTime: state.workoutStartTime,
        currentView: state.currentView,
        autoRestTimer: state.autoRestTimer,
        restSeconds: state.restSeconds
      }));
    } catch (e) {
      console.error('Failed to save state:', e);
    }
  }

  // ─── Navigation ──────────────────────────
  function navigate(view) {
    state.currentView = view;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${view}`).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.view === view);
    });

    if (view === 'dashboard') renderDashboard();
    if (view === 'history') renderHistory();
    if (view === 'progress') renderProgress();
    saveState();
  }

  // ─── Greeting ────────────────────────────
  function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Good evening';
    if (hour < 12) greeting = 'Good morning';
    else if (hour < 17) greeting = 'Good afternoon';
    document.getElementById('greeting-text').textContent = greeting;
  }

  // ─── Dashboard ───────────────────────────
  function renderDashboard() {
    // Stats
    const total = state.workouts.length;
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const thisWeek = state.workouts.filter(w => new Date(w.date) >= startOfWeek).length;

    // Calculate streak
    let streak = 0;
    if (state.workouts.length > 0) {
      const sortedDates = [...new Set(state.workouts.map(w =>
        new Date(w.date).toDateString()
      ))].sort((a, b) => new Date(b) - new Date(a));

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let checkDate = new Date(today);

      // Check if worked out today or yesterday
      const lastWorkoutDate = new Date(sortedDates[0]);
      lastWorkoutDate.setHours(0, 0, 0, 0);
      const diffDays = Math.floor((today - lastWorkoutDate) / (1000 * 60 * 60 * 24));

      if (diffDays <= 1) {
        if (diffDays === 1) checkDate.setDate(checkDate.getDate() - 1);
        for (const dateStr of sortedDates) {
          if (new Date(dateStr).toDateString() === checkDate.toDateString()) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
          } else break;
        }
      }
    }

    document.getElementById('stat-workouts').textContent = total;
    document.getElementById('stat-week').textContent = thisWeek;
    document.getElementById('stat-streak').textContent = streak;

    // Templates
    renderTemplates();

    // Recent workouts (last 3)
    const container = document.getElementById('recent-workouts');
    const recent = state.workouts.slice(-3).reverse();

    if (recent.length === 0) {
      container.innerHTML = `
        <div class="text-center text-secondary" style="padding: 24px 0;">
          <p class="text-sm">No workouts yet. Start your first one!</p>
        </div>`;
      return;
    }

    container.innerHTML = recent.map(w => {
      const date = new Date(w.date);
      const dateStr = formatDate(date);
      const totalSets = w.exercises.reduce((sum, ex) => sum + ex.sets.length, 0);
      const totalVolume = calcVolume(w);
      const exerciseNames = w.exercises.map(ex => ex.name).slice(0, 4);

      return `
        <div class="recent-workout-card" onclick="app.navigate('history')">
          <div class="recent-workout-header">
            <span class="recent-workout-name">${escapeHtml(w.name || 'Workout')}</span>
            <span class="recent-workout-date">${dateStr}</span>
          </div>
          <div class="recent-workout-stats">
            <span class="recent-workout-stat">
              <svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
              ${w.exercises.length} exercises
            </span>
            <span class="recent-workout-stat">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              ${w.duration || '—'}
            </span>
            <span class="recent-workout-stat">
              <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              ${formatNumber(totalVolume)} ${state.unit}
            </span>
          </div>
          <div class="recent-workout-exercises">
            ${exerciseNames.map(n => `<span class="exercise-tag">${escapeHtml(n)}</span>`).join('')}
            ${w.exercises.length > 4 ? `<span class="exercise-tag">+${w.exercises.length - 4}</span>` : ''}
          </div>
        </div>`;
    }).join('');
  }

  // ─── Templates ───────────────────────────
  function renderTemplates() {
    const container = document.getElementById('templates-list');
    if (state.templates.length === 0) {
      container.innerHTML = `
        <div class="text-center text-secondary" style="padding: 16px 0 24px;">
          <p class="text-sm">Save a workout as a template to quick-start next time</p>
        </div>`;
      return;
    }

    container.innerHTML = state.templates.map((t, i) => `
      <div class="template-card" onclick="app.startFromTemplate(${i})">
        <div class="flex-between">
          <div>
            <div class="template-name">${escapeHtml(t.name)}</div>
            <div class="template-exercises">${t.exercises.map(e => e.name).join(' · ')}</div>
          </div>
          <button class="btn-icon" onclick="event.stopPropagation(); app.deleteTemplate(${i})" title="Delete template">
            <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
          </button>
        </div>
      </div>`).join('');
  }

  function showCreateTemplate() {
    if (!state.activeWorkout || state.activeWorkout.exercises.length === 0) {
      showToast('Start a workout with exercises first', 'error');
      return;
    }
    document.getElementById('template-modal').classList.add('active');
    document.getElementById('template-name-input').value = state.activeWorkout.name || '';
    document.getElementById('template-name-input').focus();
  }

  function saveTemplate() {
    const name = document.getElementById('template-name-input').value.trim();
    if (!name) { showToast('Enter a template name', 'error'); return; }

    state.templates.push({
      name,
      exercises: state.activeWorkout.exercises.map(ex => ({
        id: ex.id,
        name: ex.name,
        emoji: ex.emoji,
        muscle: ex.muscle,
        setsCount: ex.sets.length
      }))
    });
    saveState();
    closeModal('template-modal');
    showToast('Template saved!', 'success');
    renderTemplates();
  }

  function deleteTemplate(index) {
    if (confirm('Delete this template?')) {
      state.templates.splice(index, 1);
      saveState();
      renderTemplates();
      showToast('Template deleted', 'success');
    }
  }

  function startFromTemplate(index) {
    const template = state.templates[index];
    state.activeWorkout = {
      name: template.name,
      exercises: template.exercises.map(ex => ({
        id: ex.id,
        name: ex.name,
        emoji: ex.emoji,
        muscle: ex.muscle,
        sets: ex.sets
          ? ex.sets.map(s => ({ weight: s.weight || '', reps: s.reps || '', completed: false }))
          : Array.from({ length: ex.setsCount || 3 }, () => ({ reps: '', weight: '', completed: false }))
      }))
    };
    state.workoutStartTime = new Date();
    startTimer();
    showWorkoutActive(true);
    renderWorkoutExercises();
    navigate('workout');
    saveState();
    showToast(`Started: ${template.name}`, 'success');
  }

  // ─── Exercise Library ────────────────────
  function renderMuscleFilters() {
    const mainFilters = document.getElementById('muscle-filters');
    const pickerFilters = document.getElementById('picker-filters');

    const html = MUSCLE_GROUPS.map(m => `
      <button class="filter-chip ${m === 'All' ? 'active' : ''}" data-muscle="${m}">${m}</button>
    `).join('');

    mainFilters.innerHTML = html;
    pickerFilters.innerHTML = html;

    mainFilters.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        state.selectedMuscle = chip.dataset.muscle;
        mainFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderExerciseList();
      });
    });

    pickerFilters.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        state.pickerMuscle = chip.dataset.muscle;
        pickerFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        renderPickerList();
      });
    });
  }

  function renderExerciseList() {
    const container = document.getElementById('exercise-list');
    const search = (document.getElementById('exercise-search').value || '').toLowerCase();
    const muscle = state.selectedMuscle;

    const filtered = EXERCISE_DB.filter(ex => {
      const matchSearch = ex.name.toLowerCase().includes(search) || ex.equipment.toLowerCase().includes(search);
      const matchMuscle = muscle === 'All' || ex.muscle === muscle;
      return matchSearch && matchMuscle;
    });

    container.innerHTML = filtered.map(ex => `
      <div class="exercise-list-item" onclick="app.showExerciseDetail('${ex.id}')">
        ${getExerciseImageHtml(ex.name, ex.emoji)}
        <div class="exercise-info">
          <div class="exercise-name">${ex.name}</div>
          <div class="exercise-meta">${ex.muscle} · ${ex.equipment}</div>
        </div>
        <svg class="exercise-arrow" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    `).join('');
  }

  function filterExercises() { renderExerciseList(); }

  function showExerciseDetail(id) {
    const ex = EXERCISE_DB.find(e => e.id === id);
    if (!ex) return;

    // Find best performance from history
    let bestWeight = 0;
    let bestReps = 0;
    let totalSetsEver = 0;
    state.workouts.forEach(w => {
      w.exercises.forEach(wex => {
        if (wex.id === id) {
          wex.sets.forEach(s => {
            totalSetsEver++;
            const weight = parseFloat(s.weight) || 0;
            const reps = parseInt(s.reps) || 0;
            if (weight > bestWeight) {
              bestWeight = weight;
              bestReps = reps;
            }
          });
        }
      });
    });

    showToast(`${ex.emoji} ${ex.name} — PR: ${bestWeight > 0 ? bestWeight + state.unit + ' × ' + bestReps : 'None yet'}`, 'success');
  }

  // ─── Exercise Picker (for workout) ───────
  function showExercisePicker() {
    document.getElementById('exercise-picker-modal').classList.add('active');
    document.getElementById('picker-search').value = '';
    state.pickerMuscle = 'All';
    document.querySelectorAll('#picker-filters .filter-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.muscle === 'All');
    });
    renderPickerList();
    setTimeout(() => document.getElementById('picker-search').focus(), 100);
  }

  function renderPickerList() {
    const container = document.getElementById('picker-list');
    const search = (document.getElementById('picker-search').value || '').toLowerCase();
    const muscle = state.pickerMuscle;

    const filtered = EXERCISE_DB.filter(ex => {
      const matchSearch = ex.name.toLowerCase().includes(search);
      const matchMuscle = muscle === 'All' || ex.muscle === muscle;
      return matchSearch && matchMuscle;
    });

    container.innerHTML = filtered.map(ex => `
      <div class="exercise-picker-item" onclick="app.addExerciseToWorkout('${ex.id}')">
        ${getExerciseImageHtml(ex.name, ex.emoji, 36)}
        <div class="exercise-info">
          <div class="exercise-name">${ex.name}</div>
          <div class="exercise-meta">${ex.muscle} · ${ex.equipment}</div>
        </div>
      </div>
    `).join('');
  }

  function filterPicker() { renderPickerList(); }

  // ─── Workout Management ──────────────────
  function startNewWorkout() {
    if (state.activeWorkout) {
      navigate('workout');
      return;
    }

    state.activeWorkout = {
      name: '',
      exercises: []
    };
    state.workoutStartTime = new Date();
    startTimer();
    showWorkoutActive(true);
    navigate('workout');
    saveState();
    showToast('Workout started! 💪', 'success');
  }

  function showWorkoutActive(active) {
    document.getElementById('workout-active').classList.toggle('hidden', !active);
    document.getElementById('workout-empty').classList.toggle('hidden', active);
    if (active && state.activeWorkout) {
      document.getElementById('workout-name').value = state.activeWorkout.name || '';
    }
  }

  function addExerciseToWorkout(exerciseId) {
    const ex = EXERCISE_DB.find(e => e.id === exerciseId);
    if (!ex) return;

    // Find last performed sets for this exercise to pre-fill
    let prefillSets = [
      { reps: '', weight: '', completed: false },
      { reps: '', weight: '', completed: false },
      { reps: '', weight: '', completed: false }
    ];

    // Look for last workout with this exercise
    for (let i = state.workouts.length - 1; i >= 0; i--) {
      const wex = state.workouts[i].exercises.find(e => e.id === exerciseId);
      if (wex && wex.sets.length > 0) {
        prefillSets = wex.sets.map(s => ({
          reps: s.reps,
          weight: s.weight,
          completed: false
        }));
        break;
      }
    }

    state.activeWorkout.exercises.push({
      id: ex.id,
      name: ex.name,
      emoji: ex.emoji,
      muscle: ex.muscle,
      sets: prefillSets
    });

    closeModal('exercise-picker-modal');
    renderWorkoutExercises();
    saveState();
    showToast(`Added ${ex.name}`, 'success');
  }

  function renderWorkoutExercises() {
    const container = document.getElementById('workout-exercises');
    if (!state.activeWorkout) return;

    container.innerHTML = state.activeWorkout.exercises.map((ex, exIdx) => {
      const completedSets = ex.sets.filter(s => s.completed).length;
      return `
        <div class="workout-exercise">
          <div class="workout-exercise-header">
            <div class="workout-exercise-name">
              ${getExerciseImageHtml(ex.name, ex.emoji, 32)}
              <input type="text" class="exercise-name-input" value="${escapeHtml(ex.name)}"
                onchange="app.renameExercise(${exIdx}, this.value)"
                onfocus="this.select()">
              <span class="badge badge-${getMuscleClass(ex.muscle)}" style="margin-left: 4px; font-size: 10px;">${completedSets}/${ex.sets.length}</span>
            </div>
            <div class="workout-exercise-actions">
              <button class="btn-icon" onclick="app.removeExercise(${exIdx})" title="Remove exercise">
                <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
          </div>
          <input type="text" class="exercise-notes-input" placeholder="Notes (e.g. tempo, grip, cues...)"
            value="${escapeHtml(ex.notes || '')}"
            onchange="app.updateExerciseNotes(${exIdx}, this.value)">
          <div class="sets-table">
            <div class="sets-header">
              <span>SET</span>
              <span>PREV</span>
              <span>${state.unit.toUpperCase()}</span>
              <span>REPS</span>
              <span>✓</span>
            </div>
            ${ex.sets.map((set, setIdx) => {
        // Find previous performance
        let prevStr = '—';
        for (let i = state.workouts.length - 1; i >= 0; i--) {
          const wex = state.workouts[i].exercises.find(e => e.id === ex.id);
          if (wex && wex.sets[setIdx]) {
            const ps = wex.sets[setIdx];
            if (ps.weight && ps.reps) {
              prevStr = `${ps.weight}×${ps.reps}`;
            }
            break;
          }
        }

        return `
              <div class="set-row">
                <div class="set-number ${set.completed ? 'completed' : ''}">${setIdx + 1}</div>
                <div style="text-align:center;font-size:12px;color:var(--text-tertiary);">${prevStr}</div>
                <input type="number" class="set-input ${set.completed ? 'completed' : ''}" 
                  value="${set.weight}" placeholder="0" min="0" step="0.5"
                  onchange="app.updateSet(${exIdx}, ${setIdx}, 'weight', this.value)"
                  inputmode="decimal">
                <input type="number" class="set-input ${set.completed ? 'completed' : ''}" 
                  value="${set.reps}" placeholder="0" min="0"
                  onchange="app.updateSet(${exIdx}, ${setIdx}, 'reps', this.value)"
                  inputmode="numeric">
                <div class="set-check ${set.completed ? 'checked' : ''}" 
                  onclick="app.toggleSetComplete(${exIdx}, ${setIdx})">
                  <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
              </div>`;
      }).join('')}
            <button class="add-set-btn" onclick="app.addSet(${exIdx})">
              <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add Set
            </button>
          </div>
        </div>`;
    }).join('');
  }

  function updateSet(exIdx, setIdx, field, value) {
    if (!state.activeWorkout) return;
    state.activeWorkout.exercises[exIdx].sets[setIdx][field] = value;
    saveState();
  }

  function toggleSetComplete(exIdx, setIdx) {
    if (!state.activeWorkout) return;
    const set = state.activeWorkout.exercises[exIdx].sets[setIdx];
    set.completed = !set.completed;
    renderWorkoutExercises();
    saveState();

    // Auto-start rest timer when completing a set (if enabled)
    if (set.completed && state.autoRestTimer) {
      toggleRestTimer();
      startRestTimer();
    }
  }

  function renameExercise(exIdx, newName) {
    if (!state.activeWorkout) return;
    const trimmed = newName.trim();
    if (trimmed) {
      state.activeWorkout.exercises[exIdx].name = trimmed;
      saveState();
    }
  }

  function updateExerciseNotes(exIdx, notes) {
    if (!state.activeWorkout) return;
    state.activeWorkout.exercises[exIdx].notes = notes;
    saveState();
  }

  function toggleAutoRestTimer() {
    state.autoRestTimer = !state.autoRestTimer;
    const btn = document.getElementById('auto-rest-toggle');
    if (btn) {
      btn.classList.toggle('active', state.autoRestTimer);
      btn.textContent = state.autoRestTimer ? '⏱ Auto Rest: ON' : '⏱ Auto Rest: OFF';
    }
    saveState();
    showToast(state.autoRestTimer ? 'Auto rest timer enabled' : 'Auto rest timer disabled', 'success');
  }

  function addSet(exIdx) {
    if (!state.activeWorkout) return;
    const ex = state.activeWorkout.exercises[exIdx];
    const lastSet = ex.sets[ex.sets.length - 1];
    ex.sets.push({
      reps: lastSet ? lastSet.reps : '',
      weight: lastSet ? lastSet.weight : '',
      completed: false
    });
    renderWorkoutExercises();
    saveState();
  }

  function removeExercise(exIdx) {
    if (!state.activeWorkout) return;
    if (confirm(`Remove ${state.activeWorkout.exercises[exIdx].name}?`)) {
      state.activeWorkout.exercises.splice(exIdx, 1);
      renderWorkoutExercises();
      saveState();
    }
  }

  function finishWorkout() {
    if (!state.activeWorkout) return;

    const completedExercises = state.activeWorkout.exercises.filter(ex =>
      ex.sets.some(s => s.completed)
    );

    if (completedExercises.length === 0) {
      showToast('Complete at least one set first!', 'error');
      return;
    }

    const name = document.getElementById('workout-name').value.trim() || 'Workout';
    const duration = document.getElementById('timer-display').textContent;

    // Save only completed sets
    const workout = {
      id: Date.now().toString(),
      name,
      date: new Date().toISOString(),
      duration,
      unit: state.unit,
      exercises: completedExercises.map(ex => ({
        id: ex.id,
        name: ex.name,
        emoji: ex.emoji,
        muscle: ex.muscle,
        sets: ex.sets.filter(s => s.completed).map(s => ({
          weight: s.weight,
          reps: s.reps,
          completed: true
        }))
      }))
    };

    state.workouts.push(workout);
    state.activeWorkout = null;
    state.workoutStartTime = null;
    stopTimer();
    showWorkoutActive(false);
    saveState();
    renderHistory();
    renderProgress();
    navigate('dashboard');
    showToast('Workout saved! 🎉', 'success');
  }

  function cancelWorkout() {
    if (!state.activeWorkout) return;
    if (confirm('Discard this workout?')) {
      state.activeWorkout = null;
      state.workoutStartTime = null;
      stopTimer();
      showWorkoutActive(false);
      saveState();
      showToast('Workout discarded', 'error');
    }
  }

  // ─── Timer ───────────────────────────────
  function startTimer() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
      if (!state.workoutStartTime) return;
      const elapsed = Math.floor((Date.now() - new Date(state.workoutStartTime).getTime()) / 1000);
      const mins = Math.floor(elapsed / 60);
      const secs = elapsed % 60;
      document.getElementById('timer-display').textContent =
        `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }, 1000);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    document.getElementById('timer-display').textContent = '00:00';
  }

  // ─── Rest Timer ──────────────────────────
  function toggleRestTimer() {
    document.getElementById('rest-timer-modal').classList.add('active');
    updateRestDisplay();
  }

  function setRestTimer(seconds) {
    state.restSeconds = seconds;
    state.restRemaining = seconds;
    stopRestCountdown();
    updateRestDisplay();

    document.querySelectorAll('.rest-preset').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.seconds) === seconds);
    });
    saveState();
  }

  function startRestTimer() {
    state.restRemaining = state.restSeconds;
    stopRestCountdown();
    updateRestDisplay();

    const timerEl = document.getElementById('workout-timer');
    timerEl.classList.add('resting');

    document.getElementById('rest-start-btn').textContent = 'Restart';

    state.restTimerInterval = setInterval(() => {
      state.restRemaining--;
      updateRestDisplay();

      if (state.restRemaining <= 0) {
        stopRestCountdown();
        timerEl.classList.remove('resting');
        showToast('Rest complete! 💪', 'success');
        closeRestTimer();
      }
    }, 1000);
  }

  function stopRestCountdown() {
    if (state.restTimerInterval) {
      clearInterval(state.restTimerInterval);
      state.restTimerInterval = null;
    }
    document.getElementById('rest-start-btn').textContent = 'Start';
  }

  function updateRestDisplay() {
    const remaining = state.restRemaining || state.restSeconds;
    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    document.getElementById('rest-timer-value').textContent =
      `${mins}:${String(secs).padStart(2, '0')}`;
  }

  function closeRestTimer() {
    stopRestCountdown();
    document.getElementById('rest-timer-modal').classList.remove('active');
    const timerEl = document.getElementById('workout-timer');
    if (timerEl) timerEl.classList.remove('resting');
  }

  // ─── Unit Toggle ─────────────────────────
  function setUnit(unit) {
    state.unit = unit;
    document.querySelectorAll('.unit-option').forEach(el => {
      el.classList.toggle('active', el.dataset.unit === unit);
    });
    renderWorkoutExercises();
    saveState();
  }

  // ─── History View ────────────────────────
  function renderHistory() {
    const container = document.getElementById('history-list');
    const search = (document.getElementById('history-search')?.value || '').toLowerCase();

    let workouts = [...state.workouts].reverse();
    if (search) {
      workouts = workouts.filter(w =>
        w.name.toLowerCase().includes(search) ||
        w.exercises.some(ex => ex.name.toLowerCase().includes(search))
      );
    }

    if (workouts.length === 0) {
      container.innerHTML = `
        <div class="history-empty">
          <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          <h3>No Workouts Yet</h3>
          <p class="text-sm">Your completed workouts will appear here</p>
        </div>`;
      return;
    }

    // Group by date
    const groups = {};
    workouts.forEach(w => {
      const dateKey = formatDate(new Date(w.date));
      if (!groups[dateKey]) groups[dateKey] = [];
      groups[dateKey].push(w);
    });

    container.innerHTML = Object.entries(groups).map(([dateLabel, wks]) => `
      <div class="history-date-group">
        <div class="history-date-label">${dateLabel}</div>
        ${wks.map(w => {
      const totalSets = w.exercises.reduce((sum, ex) => sum + ex.sets.length, 0);
      const totalVolume = calcVolume(w);
      return `
          <div class="history-card" onclick="this.classList.toggle('expanded')">
            <div class="history-card-header">
              <span class="history-card-title">${escapeHtml(w.name)}</span>
              <span class="history-card-duration">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                ${w.duration || '—'}
              </span>
            </div>
            <div class="history-card-stats">
              <div class="history-stat">
                <span class="history-stat-value">${w.exercises.length}</span>
                <span class="history-stat-label">Exercises</span>
              </div>
              <div class="history-stat">
                <span class="history-stat-value">${totalSets}</span>
                <span class="history-stat-label">Sets</span>
              </div>
              <div class="history-stat">
                <span class="history-stat-value">${formatNumber(totalVolume)}</span>
                <span class="history-stat-label">Volume (${w.unit || state.unit})</span>
              </div>
            </div>
            <div class="history-exercises-list">
              ${w.exercises.map(ex => `
                <div class="history-exercise-item">
                  <span class="history-exercise-name">${ex.emoji} ${escapeHtml(ex.name)}</span>
                  <span class="history-exercise-summary">${ex.sets.map(s => `${s.weight}×${s.reps}`).join(', ')}</span>
                </div>
              `).join('')}
              <div class="history-delete-btn">
                <button class="btn btn-danger btn-sm" onclick="event.stopPropagation(); app.deleteWorkout('${w.id}')">Delete Workout</button>
              </div>
            </div>
          </div>`;
    }).join('')}
      </div>
    `).join('');
  }

  function filterHistory() { renderHistory(); }

  function deleteWorkout(id) {
    if (confirm('Delete this workout permanently?')) {
      state.workouts = state.workouts.filter(w => w.id !== id);
      saveState();
      renderHistory();
      renderDashboard();
      showToast('Workout deleted', 'success');
    }
  }

  // ─── Progress View ───────────────────────
  function renderProgress() {
    const container = document.getElementById('progress-content');

    if (state.workouts.length === 0) {
      container.innerHTML = `
        <div class="progress-empty">
          <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          <h3>No Data Yet</h3>
          <p class="text-sm">Complete some workouts to see your progress</p>
        </div>`;
      return;
    }

    // Summary stats
    const totalVolume = state.workouts.reduce((sum, w) => sum + calcVolume(w), 0);
    const totalSets = state.workouts.reduce((sum, w) =>
      sum + w.exercises.reduce((s2, ex) => s2 + ex.sets.length, 0), 0);
    const totalExercises = state.workouts.reduce((sum, w) => sum + w.exercises.length, 0);

    // Find PRs
    const prs = {};
    state.workouts.forEach(w => {
      w.exercises.forEach(ex => {
        ex.sets.forEach(s => {
          const weight = parseFloat(s.weight) || 0;
          if (weight > 0) {
            if (!prs[ex.id] || weight > prs[ex.id].weight) {
              prs[ex.id] = {
                name: ex.name,
                emoji: ex.emoji,
                weight,
                reps: parseInt(s.reps) || 0,
                date: w.date
              };
            }
          }
        });
      });
    });

    const prList = Object.values(prs).sort((a, b) => b.weight - a.weight).slice(0, 5);

    // Get exercises used across all workouts for the chart select
    const exerciseIds = new Set();
    state.workouts.forEach(w => w.exercises.forEach(ex => exerciseIds.add(ex.id)));
    const usedExercises = EXERCISE_DB.filter(e => exerciseIds.has(e.id));

    container.innerHTML = `
      <div class="progress-summary-cards">
        <div class="progress-summary-card">
          <div class="progress-summary-icon">🏋️</div>
          <div class="progress-summary-value">${state.workouts.length}</div>
          <div class="progress-summary-label">Total Workouts</div>
        </div>
        <div class="progress-summary-card">
          <div class="progress-summary-icon">📊</div>
          <div class="progress-summary-value">${formatNumber(totalVolume)}</div>
          <div class="progress-summary-label">Total Volume (${state.unit})</div>
        </div>
        <div class="progress-summary-card">
          <div class="progress-summary-icon">🎯</div>
          <div class="progress-summary-value">${totalSets}</div>
          <div class="progress-summary-label">Total Sets</div>
        </div>
        <div class="progress-summary-card">
          <div class="progress-summary-icon">💪</div>
          <div class="progress-summary-value">${totalExercises}</div>
          <div class="progress-summary-label">Total Exercises</div>
        </div>
      </div>

      ${usedExercises.length > 0 ? `
      <div class="chart-container">
        <div class="chart-header">
          <span class="chart-title">Weight Progression</span>
          <select class="exercise-select" id="chart-exercise-select" onchange="app.renderChart()">
            ${usedExercises.map((ex, i) => `<option value="${ex.id}" ${i === 0 ? 'selected' : ''}>${ex.name}</option>`).join('')}
          </select>
        </div>
        <canvas id="progress-chart" class="chart-canvas"></canvas>
      </div>` : ''}

      ${prList.length > 0 ? `
      <div class="section-header">
        <span class="section-title">Personal Records 🏆</span>
      </div>
      <div class="pr-list">
        ${prList.map((pr, i) => `
          <div class="pr-item">
            <span class="pr-medal">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '🏅'}</span>
            <div class="pr-info">
              <div class="pr-exercise">${pr.emoji} ${escapeHtml(pr.name)}</div>
              <div class="pr-detail">${formatDate(new Date(pr.date))} · ${pr.reps} reps</div>
            </div>
            <span class="pr-weight">${pr.weight} ${state.unit}</span>
          </div>
        `).join('')}
      </div>` : ''}
    `;

    if (usedExercises.length > 0) {
      setTimeout(() => renderChart(), 50);
    }
  }

  // ─── Chart Rendering (Canvas) ────────────
  function renderChart() {
    const canvas = document.getElementById('progress-chart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const exerciseId = document.getElementById('chart-exercise-select').value;

    // Collect data points
    const dataPoints = [];
    state.workouts.forEach(w => {
      w.exercises.forEach(ex => {
        if (ex.id === exerciseId) {
          let maxWeight = 0;
          ex.sets.forEach(s => {
            const weight = parseFloat(s.weight) || 0;
            if (weight > maxWeight) maxWeight = weight;
          });
          if (maxWeight > 0) {
            dataPoints.push({
              date: new Date(w.date),
              weight: maxWeight
            });
          }
        }
      });
    });

    if (dataPoints.length === 0) {
      ctx.fillStyle = '#5a5a6a';
      ctx.font = '14px Inter';
      ctx.textAlign = 'center';
      ctx.fillText('No data for this exercise', rect.width / 2, rect.height / 2);
      return;
    }

    // Chart dimensions
    const padding = { top: 20, right: 20, bottom: 40, left: 50 };
    const chartW = rect.width - padding.left - padding.right;
    const chartH = rect.height - padding.top - padding.bottom;

    const minW = Math.min(...dataPoints.map(d => d.weight)) * 0.9;
    const maxW = Math.max(...dataPoints.map(d => d.weight)) * 1.1;
    const minT = dataPoints[0].date.getTime();
    const maxT = dataPoints[dataPoints.length - 1].date.getTime();
    const timeRange = maxT - minT || 1;

    function scaleX(d) { return padding.left + ((d.getTime() - minT) / timeRange) * chartW; }
    function scaleY(w) { return padding.top + chartH - ((w - minW) / (maxW - minW || 1)) * chartH; }

    // Grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    ctx.lineWidth = 1;
    const gridCount = 4;
    for (let i = 0; i <= gridCount; i++) {
      const y = padding.top + (chartH / gridCount) * i;
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + chartW, y);
      ctx.stroke();

      // Labels
      const val = maxW - ((maxW - minW) / gridCount) * i;
      ctx.fillStyle = '#5a5a6a';
      ctx.font = '11px Inter';
      ctx.textAlign = 'right';
      ctx.fillText(Math.round(val), padding.left - 8, y + 4);
    }

    // Date labels
    ctx.textAlign = 'center';
    const labelCount = Math.min(dataPoints.length, 5);
    const step = Math.max(1, Math.floor(dataPoints.length / labelCount));
    for (let i = 0; i < dataPoints.length; i += step) {
      const d = dataPoints[i];
      const x = scaleX(d.date);
      ctx.fillStyle = '#5a5a6a';
      ctx.font = '10px Inter';
      ctx.fillText(
        `${d.date.getDate()}/${d.date.getMonth() + 1}`,
        x, rect.height - 8
      );
    }

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartH);
    gradient.addColorStop(0, 'rgba(99, 102, 241, 0.3)');
    gradient.addColorStop(1, 'rgba(99, 102, 241, 0.0)');

    ctx.beginPath();
    ctx.moveTo(scaleX(dataPoints[0].date), padding.top + chartH);
    dataPoints.forEach(d => ctx.lineTo(scaleX(d.date), scaleY(d.weight)));
    ctx.lineTo(scaleX(dataPoints[dataPoints.length - 1].date), padding.top + chartH);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Line
    ctx.beginPath();
    dataPoints.forEach((d, i) => {
      const x = scaleX(d.date);
      const y = scaleY(d.weight);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.stroke();

    // Data points
    dataPoints.forEach(d => {
      const x = scaleX(d.date);
      const y = scaleY(d.weight);

      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#6366f1';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
    });
  }

  // ─── Helpers ─────────────────────────────
  function calcVolume(workout) {
    return workout.exercises.reduce((sum, ex) =>
      sum + ex.sets.reduce((s, set) => s + (parseFloat(set.weight) || 0) * (parseInt(set.reps) || 0), 0), 0);
  }

  function formatDate(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const diff = Math.floor((today - d) / (1000 * 60 * 60 * 24));

    if (diff === 0) return 'Today';
    if (diff === 1) return 'Yesterday';
    if (diff < 7) return `${diff} days ago`;
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: d.getFullYear() !== today.getFullYear() ? 'numeric' : undefined });
  }

  function formatNumber(num) {
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return Math.round(num).toString();
  }

  function getMuscleClass(muscle) {
    const map = { Chest: 'blue', Back: 'blue', Shoulders: 'orange', Arms: 'purple', Legs: 'green', Core: 'blue', Cardio: 'purple' };
    return map[muscle] || 'blue';
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function closeModal(id) {
    document.getElementById(id).classList.remove('active');
  }

  function showToast(message, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast' + (type ? ' ' + type : '');
    requestAnimationFrame(() => {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    });
  }

  // Workout name auto-save
  document.getElementById('workout-name').addEventListener('input', (e) => {
    if (state.activeWorkout) {
      state.activeWorkout.name = e.target.value;
      saveState();
    }
  });

  // ─── Init on load ────────────────────────
  init();

  // ─── Public API ──────────────────────────
  return {
    navigate,
    startNewWorkout,
    showExercisePicker,
    filterExercises,
    filterPicker,
    addExerciseToWorkout,
    updateSet,
    toggleSetComplete,
    addSet,
    removeExercise,
    finishWorkout,
    cancelWorkout,
    setUnit,
    toggleRestTimer,
    setRestTimer,
    startRestTimer,
    closeRestTimer,
    filterHistory,
    deleteWorkout,
    renderChart,
    showExerciseDetail,
    showCreateTemplate,
    saveTemplate,
    deleteTemplate,
    startFromTemplate,
    closeModal,
    renameExercise,
    updateExerciseNotes,
    toggleAutoRestTimer,
    showImagePreview
  };

})();
