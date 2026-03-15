// 기본 예시 단어들 (100개)
const DEFAULT_WORDS = [
  { english: "abandon", korean: "버리다, 포기하다" },
  { english: "ability", korean: "능력" },
  { english: "accept", korean: "받아들이다" },
  { english: "accomplish", korean: "성취하다" },
  { english: "advantage", korean: "이점, 장점" },
  { english: "advice", korean: "충고, 조언" },
  { english: "affect", korean: "영향을 미치다" },
  { english: "allow", korean: "허락하다" },
  { english: "amazing", korean: "놀라운" },
  { english: "ancient", korean: "고대의, 아주 오래된" },

  { english: "behavior", korean: "행동, 태도" },
  { english: "benefit", korean: "이익, 혜택" },
  { english: "belief", korean: "믿음, 신념" },
  { english: "biology", korean: "생물학" },
  { english: "blank", korean: "빈, 공백의" },
  { english: "brave", korean: "용감한" },
  { english: "brief", korean: "짧은, 간단한" },
  { english: "bright", korean: "밝은, 똑똑한" },
  { english: "budget", korean: "예산" },
  { english: "business", korean: "사업, 일" },

  { english: "calculate", korean: "계산하다" },
  { english: "careful", korean: "조심스러운" },
  { english: "challenge", korean: "도전, 과제" },
  { english: "change", korean: "변화, 바꾸다" },
  { english: "character", korean: "성격, 등장인물" },
  { english: "choice", korean: "선택" },
  { english: "comfortable", korean: "편안한" },
  { english: "communicate", korean: "소통하다" },
  { english: "community", korean: "지역사회, 공동체" },
  { english: "curious", korean: "호기심이 많은" },

  { english: "damage", korean: "손상, 피해" },
  { english: "decide", korean: "결정하다" },
  { english: "decorate", korean: "장식하다" },
  { english: "degree", korean: "정도, (온도·각도) 도" },
  { english: "deliver", korean: "배달하다, 전달하다" },
  { english: "demand", korean: "요구하다, 수요" },
  { english: "describe", korean: "묘사하다" },
  { english: "design", korean: "설계하다, 디자인하다" },
  { english: "determine", korean: "결정하다, 알아내다" },
  { english: "develop", korean: "발전시키다, 개발하다" },

  { english: "efficient", korean: "효율적인" },
  { english: "effort", korean: "노력" },
  { english: "emotion", korean: "감정" },
  { english: "encourage", korean: "격려하다" },
  { english: "energy", korean: "에너지, 기운" },
  { english: "enjoy", korean: "즐기다" },
  { english: "environment", korean: "환경" },
  { english: "event", korean: "행사, 사건" },
  { english: "example", korean: "예, 사례" },
  { english: "experience", korean: "경험" },

  { english: "famous", korean: "유명한" },
  { english: "favorite", korean: "가장 좋아하는" },
  { english: "fear", korean: "두려움, 두려워하다" },
  { english: "feature", korean: "특징" },
  { english: "figure", korean: "수치, 인물; 이해하다" },
  { english: "flexible", korean: "융통성 있는, 유연한" },
  { english: "focus", korean: "집중하다, 초점" },
  { english: "foreign", korean: "외국의" },
  { english: "frequent", korean: "빈번한" },
  { english: "future", korean: "미래" },

  { english: "generous", korean: "관대한, 너그러운" },
  { english: "habit", korean: "습관" },
  { english: "handle", korean: "다루다, 처리하다" },
  { english: "healthy", korean: "건강한" },
  { english: "helpful", korean: "도움이 되는" },
  { english: "history", korean: "역사" },
  { english: "honest", korean: "정직한" },
  { english: "however", korean: "그러나, 아무리 ~일지라도" },
  { english: "huge", korean: "거대한" },
  { english: "human", korean: "인간의, 인간" },

  { english: "ignore", korean: "무시하다" },
  { english: "imagine", korean: "상상하다" },
  { english: "improve", korean: "향상시키다" },
  { english: "include", korean: "포함하다" },
  { english: "indeed", korean: "정말로, 참으로" },
  { english: "information", korean: "정보" },
  { english: "injury", korean: "부상" },
  { english: "interest", korean: "흥미, 관심; 이자" },
  { english: "interview", korean: "면접, 인터뷰" },
  { english: "journey", korean: "여행, 여정" },

  { english: "knowledge", korean: "지식" },
  { english: "language", korean: "언어" },
  { english: "leader", korean: "지도자, 리더" },
  { english: "level", korean: "수준, 단계" },
  { english: "limit", korean: "한계, 제한" },
  { english: "lucky", korean: "행운의, 운이 좋은" },
  { english: "manage", korean: "관리하다, 경영하다" },
  { english: "memory", korean: "기억, 추억" },
  { english: "message", korean: "메시지, 전달 내용" },
  { english: "method", korean: "방법, 방식" }
];

const STORAGE_KEYS = {
  WORDS: "english_memo_words",
  HISTORY: "english_memo_history"
};

// DOM 요소
const mainMenu = document.getElementById("main-menu");
const testScreen = document.getElementById("test-screen");
const manageWordsScreen = document.getElementById("manage-words-screen");
const historyScreen = document.getElementById("history-screen");

const startTestBtn = document.getElementById("start-test-btn");
const manageWordsBtn = document.getElementById("manage-words-btn");
const viewHistoryBtn = document.getElementById("view-history-btn");

const backToMainFromTestBtn = document.getElementById("back-to-main-from-test");
const backToMainFromManageBtn = document.getElementById("back-to-main-from-manage");
const backToMainFromHistoryBtn = document.getElementById("back-to-main-from-history");
const backToMainFromResultBtn = document.getElementById("back-to-main-from-result");

const englishWordEl = document.getElementById("english-word");
const koreanMeaningEl = document.getElementById("korean-meaning");
const showMeaningBtn = document.getElementById("show-meaning-btn");
const correctBtn = document.getElementById("correct-btn");
const wrongBtn = document.getElementById("wrong-btn");
const testProgressEl = document.getElementById("test-progress");
const testResultSection = document.getElementById("test-result");
const testContentSection = document.getElementById("test-content");
const resultBody = document.getElementById("result-body");
const restartTestBtn = document.getElementById("restart-test-btn");

const showAddWordFormBtn = document.getElementById("show-add-word-form-btn");
const addWordForm = document.getElementById("add-word-form");
const newEnglishInput = document.getElementById("new-english");
const newKoreanInput = document.getElementById("new-korean");
const wordListTbody = document.getElementById("word-list");
const sortByCreatedBtn = document.getElementById("sort-by-created-btn");
const sortByAccuracyBtn = document.getElementById("sort-by-accuracy-btn");

const historyListTbody = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history-btn");
const historyModalEl = document.getElementById("history-modal");
const historyModalTitleEl = document.getElementById("history-modal-title");
const historyModalBodyEl = document.getElementById("history-modal-body");
const historyModalCloseBtn = document.getElementById("history-modal-close");
const totalWordsEl = document.getElementById("total-words");
const totalTestsEl = document.getElementById("total-tests");
const overallAccuracyEl = document.getElementById("overall-accuracy");

// 상태
let words = [];
let history = [];

let testQueue = [];
let currentIndex = 0;
let answers = []; // { english, korean, isCorrect }
let wordSortMode = "created"; // "created" | "accuracy"

// 로컬 스토리지 유틸
function loadFromStorage() {
  try {
    const storedWords = JSON.parse(localStorage.getItem(STORAGE_KEYS.WORDS));
    const storedHistory = JSON.parse(localStorage.getItem(STORAGE_KEYS.HISTORY));

    words = Array.isArray(storedWords) && storedWords.length > 0 ? storedWords : DEFAULT_WORDS.slice();
    // 이전 데이터에 등록일자가 없는 경우 최근 7일 내 날짜를 골고루 배분해서 채워줌
    let touched = false;
    const now = new Date();
    words.forEach((w, idx) => {
      if (!w.createdAt) {
        const d = new Date(now.getTime());
        const offsetDays = idx % 7; // 0~6일 전
        d.setDate(d.getDate() - offsetDays);
        w.createdAt = d.toISOString();
        touched = true;
      }
    });
    if (touched) {
      saveWords();
    }
    history = Array.isArray(storedHistory) ? storedHistory : [];
  } catch (e) {
    words = DEFAULT_WORDS.slice();
    history = [];
  }

  // 통계 초기 표시
  updateStats();
}

function saveWords() {
  localStorage.setItem(STORAGE_KEYS.WORDS, JSON.stringify(words));
  updateStats();
}

function saveHistory() {
  localStorage.setItem(STORAGE_KEYS.HISTORY, JSON.stringify(history));
  updateStats();
}

// 상단 통계 갱신
function updateStats() {
  // 총 단어수
  totalWordsEl.textContent = `${words.length}개`;

  // 총 시험횟수
  totalTestsEl.textContent = `${history.length}회`;

  // 전체 정답률 (모든 시험 기록 기준)
  if (history.length === 0) {
    overallAccuracyEl.textContent = "0%";
    return;
  }
  let totalCorrect = 0;
  let totalQuestions = 0;
  history.forEach((h) => {
    if (typeof h.correct === "number" && typeof h.total === "number") {
      totalCorrect += h.correct;
      totalQuestions += h.total;
    }
  });
  const acc = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  overallAccuracyEl.textContent = `${acc}%`;
}

// 화면 전환
function showSection(section) {
  [mainMenu, testScreen, manageWordsScreen, historyScreen].forEach((sec) => {
    if (sec === section) {
      sec.classList.remove("hidden");
    } else {
      sec.classList.add("hidden");
    }
  });
}

// 단어 관리 UI
function renderWordList() {
  wordListTbody.innerHTML = "";
  if (words.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 6;
    td.textContent = "등록된 단어가 없습니다. 단어를 추가해 주세요.";
    td.style.textAlign = "center";
    tr.appendChild(td);
    wordListTbody.appendChild(tr);
    return;
  }

  const list = words.slice();

  if (wordSortMode === "accuracy") {
    list.sort((a, b) => {
      const shownA = a.shownCount || 0;
      const shownB = b.shownCount || 0;
      const correctA = a.correctCount || 0;
      const correctB = b.correctCount || 0;

      // 퍼센트 단위 정답률 (0~100), 시험 안 본 경우는 Infinity로 뒤로 보냄
      const percentA = shownA > 0 ? Math.round((correctA / shownA) * 100) : Infinity;
      const percentB = shownB > 0 ? Math.round((correctB / shownB) * 100) : Infinity;

      // 정답률 낮은 순(0% -> 100% -> 시험 안 본 단어)
      if (percentA === percentB) {
        // 같은 정답률이면 등록순(배열상 뒤에 있는 = 더 최근)이 위로 오도록 역순 비교
        return words.indexOf(b) - words.indexOf(a);
      }
      return percentA - percentB;
    });
  }

  list.forEach((w, idx) => {
    const tr = document.createElement("tr");

    const idxTd = document.createElement("td");
    idxTd.textContent = idx + 1;

    const engTd = document.createElement("td");
    engTd.textContent = w.english;

    const korTd = document.createElement("td");
    korTd.textContent = w.korean;

    const createdTd = document.createElement("td");
    if (w.createdAt) {
      const d = new Date(w.createdAt);
      const formatted = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
        d.getDate()
      ).padStart(2, "0")}`;
      createdTd.textContent = formatted;
    } else {
      createdTd.textContent = "-";
    }

    const accuracyTd = document.createElement("td");
    const shown = w.shownCount || 0;
    const correct = w.correctCount || 0;
    if (shown > 0) {
      const rate = Math.round((correct / shown) * 100);
      accuracyTd.textContent = `${rate}% (${correct}/${shown})`;
    } else {
      accuracyTd.textContent = "-";
    }

    const actionTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.className = "secondary-btn";
    editBtn.style.marginRight = "6px";
    editBtn.addEventListener("click", () => {
      const newEng = prompt("새 영어 단어를 입력하세요.", w.english);
      if (newEng === null) return;
      const trimmedEng = newEng.trim();
      if (!trimmedEng) return;

      const newKor = prompt("새 한글 뜻을 입력하세요.", w.korean);
      if (newKor === null) return;
      const trimmedKor = newKor.trim();
      if (!trimmedKor) return;

      w.english = trimmedEng;
      w.korean = trimmedKor;
      saveWords();
      renderWordList();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "danger-outline-btn";
    deleteBtn.addEventListener("click", () => {
      if (confirm(`"${w.english}" 단어를 삭제하시겠습니까?`)) {
        const originalIndex = words.indexOf(w);
        if (originalIndex !== -1) {
          words.splice(originalIndex, 1);
          saveWords();
          renderWordList();
        }
      }
    });
    actionTd.appendChild(editBtn);
    actionTd.appendChild(deleteBtn);

    tr.appendChild(idxTd);
    tr.appendChild(engTd);
    tr.appendChild(korTd);
    tr.appendChild(createdTd);
    tr.appendChild(accuracyTd);
    tr.appendChild(actionTd);

    wordListTbody.appendChild(tr);
  });
}

// 시험 관련
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function startTest() {
  if (words.length === 0) {
    alert("등록된 단어가 없습니다. 먼저 단어를 추가해 주세요.");
    showSection(manageWordsScreen);
    return;
  }

  const shuffled = shuffle(words);
  testQueue = shuffled.slice(0, Math.min(10, shuffled.length));
  currentIndex = 0;
  answers = [];

  testResultSection.classList.add("hidden");
  testContentSection.classList.remove("hidden");

  showSection(testScreen);
  showQuestion();
}

function showQuestion() {
  const total = testQueue.length;
  if (currentIndex >= total) {
    finishTest();
    return;
  }

  const item = testQueue[currentIndex];
  englishWordEl.textContent = item.english;
  koreanMeaningEl.textContent = item.korean;
  koreanMeaningEl.classList.add("hidden");

  testProgressEl.textContent = `문제 ${currentIndex + 1} / ${total}`;

  showMeaningBtn.disabled = false;
  correctBtn.disabled = true;
  wrongBtn.disabled = true;
}

function onShowMeaning() {
  koreanMeaningEl.classList.remove("hidden");
  showMeaningBtn.disabled = true;
  correctBtn.disabled = false;
  wrongBtn.disabled = false;
}

function onAnswer(isCorrect) {
  const item = testQueue[currentIndex];
  // 단어별 출제/정답 통계 업데이트
  item.shownCount = (item.shownCount || 0) + 1;
  if (isCorrect) {
    item.correctCount = (item.correctCount || 0) + 1;
  }

  answers.push({
    english: item.english,
    korean: item.korean,
    isCorrect
  });
  currentIndex += 1;
  showQuestion();
}

function finishTest() {
  const total = answers.length;
  const correctCount = answers.filter((a) => a.isCorrect).length;
  const wrongCount = total - correctCount;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  // 기록 저장
  const now = new Date();
  history.unshift({
    timestamp: now.toISOString(),
    correct: correctCount,
    wrong: wrongCount,
    total,
    accuracy,
    answers: answers.map((a) => ({
      english: a.english,
      korean: a.korean,
      isCorrect: a.isCorrect
    }))
  });
  saveHistory();

  // 단어별 통계 저장
  saveWords();

  // 결과 테이블 표시
  resultBody.innerHTML = "";
  answers.forEach((a, idx) => {
    const tr = document.createElement("tr");

    const idxTd = document.createElement("td");
    idxTd.textContent = idx + 1;

    const engTd = document.createElement("td");
    engTd.textContent = a.english;

    const korTd = document.createElement("td");
    korTd.textContent = a.korean;

    const resultTd = document.createElement("td");
    resultTd.textContent = a.isCorrect ? "맞음" : "틀림";
    resultTd.style.color = a.isCorrect ? "#2a9d8f" : "#e63946";

    tr.appendChild(idxTd);
    tr.appendChild(engTd);
    tr.appendChild(korTd);
    tr.appendChild(resultTd);

    resultBody.appendChild(tr);
  });

  testContentSection.classList.add("hidden");
  testResultSection.classList.remove("hidden");
}

// 기록 조회 UI
function renderHistory() {
  historyListTbody.innerHTML = "";
  if (history.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 4;
    td.textContent = "시험 기록이 없습니다.";
    td.style.textAlign = "center";
    tr.appendChild(td);
    historyListTbody.appendChild(tr);
    return;
  }

  history.forEach((h) => {
    const tr = document.createElement("tr");

    const dateTd = document.createElement("td");
    const date = new Date(h.timestamp);
    const formatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
      date.getDate()
    ).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(
      2,
      "0"
    )}`;
    dateTd.textContent = formatted;

    const correctTd = document.createElement("td");
    correctTd.textContent = `${h.correct}개`;

    const wrongTd = document.createElement("td");
    wrongTd.textContent = `${h.wrong}개`;

    const accTd = document.createElement("td");
    accTd.textContent = `${h.accuracy}%`;

    tr.addEventListener("click", () => showHistoryDetail(h));

    tr.appendChild(dateTd);
    tr.appendChild(correctTd);
    tr.appendChild(wrongTd);
    tr.appendChild(accTd);

    historyListTbody.appendChild(tr);
  });
}

function showHistoryDetail(historyItem) {
  const date = new Date(historyItem.timestamp);
  const formatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate()
  ).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;

  if (!Array.isArray(historyItem.answers) || historyItem.answers.length === 0) {
    historyModalTitleEl.textContent = `${formatted} - 이 시험의 정오표 정보가 없습니다.`;
    historyModalBodyEl.innerHTML = "";
    historyModalEl.classList.remove("hidden");
    return;
  }

  historyModalTitleEl.textContent = `${formatted} - 정오표`;
  historyModalBodyEl.innerHTML = "";

  historyItem.answers.forEach((a, idx) => {
    const tr = document.createElement("tr");

    const idxTd = document.createElement("td");
    idxTd.textContent = idx + 1;

    const engTd = document.createElement("td");
    engTd.textContent = a.english;

    const korTd = document.createElement("td");
    korTd.textContent = a.korean;

    const resultTd = document.createElement("td");
    resultTd.textContent = a.isCorrect ? "맞음" : "틀림";
    resultTd.style.color = a.isCorrect ? "#2a9d8f" : "#e63946";

    tr.appendChild(idxTd);
    tr.appendChild(engTd);
    tr.appendChild(korTd);
    tr.appendChild(resultTd);

    historyModalBodyEl.appendChild(tr);
  });

  historyModalEl.classList.remove("hidden");
}

// 이벤트 바인딩
function setupEvents() {
  startTestBtn.addEventListener("click", startTest);
  manageWordsBtn.addEventListener("click", () => {
    showSection(manageWordsScreen);
    renderWordList();
  });
  viewHistoryBtn.addEventListener("click", () => {
    showSection(historyScreen);
    renderHistory();
  });

  backToMainFromTestBtn.addEventListener("click", () => showSection(mainMenu));
  backToMainFromManageBtn.addEventListener("click", () => showSection(mainMenu));
  backToMainFromHistoryBtn.addEventListener("click", () => showSection(mainMenu));
  backToMainFromResultBtn.addEventListener("click", () => showSection(mainMenu));

  showMeaningBtn.addEventListener("click", onShowMeaning);
  correctBtn.addEventListener("click", () => onAnswer(true));
  wrongBtn.addEventListener("click", () => onAnswer(false));
  restartTestBtn.addEventListener("click", startTest);

  showAddWordFormBtn.addEventListener("click", () => {
    addWordForm.classList.remove("hidden");
    newEnglishInput.focus();
  });

  addWordForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const eng = newEnglishInput.value.trim();
    const kor = newKoreanInput.value.trim();
    if (!eng || !kor) return;

    // 새로 추가한 단어가 목록의 맨 위에 보이도록 앞쪽에 추가
    words.unshift({ english: eng, korean: kor, createdAt: new Date().toISOString() });
    saveWords();
    newEnglishInput.value = "";
    newKoreanInput.value = "";
    renderWordList();
  });

  sortByCreatedBtn.addEventListener("click", () => {
    wordSortMode = "created";
    sortByCreatedBtn.classList.add("active");
    sortByAccuracyBtn.classList.remove("active");
    renderWordList();
  });

  sortByAccuracyBtn.addEventListener("click", () => {
    wordSortMode = "accuracy";
    sortByAccuracyBtn.classList.add("active");
    sortByCreatedBtn.classList.remove("active");
    renderWordList();
  });

  clearHistoryBtn.addEventListener("click", () => {
    if (!confirm("시험 기록을 모두 삭제하시겠습니까?")) return;
    history = [];
    saveHistory();
    renderHistory();
  });

  historyModalCloseBtn.addEventListener("click", () => {
    historyModalEl.classList.add("hidden");
  });

  // 모달 바깥 영역 클릭 시 닫기
  historyModalEl.addEventListener("click", (e) => {
    if (e.target === historyModalEl || e.target.classList.contains("modal-backdrop")) {
      historyModalEl.classList.add("hidden");
    }
  });
}

// 초기화
function init() {
  loadFromStorage();
  setupEvents();
}

document.addEventListener("DOMContentLoaded", init);

