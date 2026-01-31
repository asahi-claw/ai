const SQL_MODULES_DB = [

    {
        "id": 0,
        "title": "Playground",
        "description": "",
        "keywords": [],
        "task": "",
        "expected_answer": "",
        "hint": ""
        
    },
    {
        "id": 1,
        "title": "單元一：基本查詢 (SELECT)",
        "description": "在 HKDSE 課程中，最基本的 SQL 語句是 SELECT。它用於從資料庫中提取資料。我們使用星號 (*) 來代表「所有欄位」。",
        "keywords": ["SELECT", "FROM", "*"],
        "task": "列出 `students` 資料表中的所有學生記錄。",
        "expected_answer": "SELECT * FROM students",
        "hint": "使用 `SELECT * FROM students` 來選取所有資料。"
    },
    {
        "id": 2,
        "title": "單元二：指定欄位查詢",
        "description": "通常我們不需要所有資料，只需特定的欄位 (Columns)。這能減少數據傳輸量，提高效率。",
        "keywords": ["SELECT", "欄位名稱"],
        "task": "只列出所有學生的姓名 (name) 和 ICT 分數 (ict_score)。",
        "expected_answer": "SELECT name, ict_score FROM students",
        "hint": "將欄位名稱用逗號分隔，例如 `SELECT name, ict_score ...`。"
    },
    {
        "id": 3,
        "title": "單元三：條件篩選 (WHERE)",
        "description": "WHERE 子句用於篩選符合特定條件的記錄。在 HKDSE 考試中，常用的運算符包括 `=`, `>`, `<`, `>=`, `<=`, `<>` (不等於)。",
        "keywords": ["WHERE", ">", "運算符"],
        "task": "找出 ICT 分數 (ict_score) 高於或等於 80 分的學生。",
        "expected_answer": "SELECT * FROM students WHERE ict_score >= 80",
        "hint": "條件應該寫在 WHERE 之後，例如 `WHERE ict_score >= 80`。"
    },
    {
        "id": 4,
        "title": "單元四：多重條件 (AND / OR)",
        "description": "我們可以使用邏輯運算符 `AND` (且) 和 `OR` (或) 來組合多個條件。",
        "keywords": ["AND", "OR", "WHERE"],
        "task": "找出屬於 'Red House' (house_id = 1) 且 ICT 分數及格 (>= 60) 的學生。",
        "expected_answer": "SELECT * FROM students WHERE house_id = 1 AND ict_score >= 60",
        "hint": "使用 AND 來連接兩個條件：`house_id = 1 AND ict_score >= 60`。"
    },
    {
        "id": 5,
        "title": "單元五：排序結果 (ORDER BY)",
        "description": "ORDER BY 用於對結果進行排序。`ASC` 代表升序 (預設)，`DESC` 代表降序 (由大至小)。",
        "keywords": ["ORDER BY", "DESC", "ASC"],
        "task": "列出所有學生，並按 ICT 分數由高至低 (DESC) 排列。",
        "expected_answer": "SELECT * FROM students ORDER BY ict_score DESC",
        "hint": "在語句末端加上 `ORDER BY ict_score DESC`。"
    },
    {
        "id": 6,
        "title": "單元六：聚合函數 (Aggregation)",
        "description": "SQL 提供函數來計算數據。HKDSE 常考的有：`COUNT()` (計數), `SUM()` (總和), `AVG()` (平均), `MAX()` (最大值), `MIN()` (最小值)。",
        "keywords": ["AVG()", "COUNT()", "AS"],
        "task": "計算所有學生的 ICT 平均分 (使用 AVG 函數)。",
        "expected_answer": "SELECT AVG(ict_score) FROM students",
        "hint": "使用 `SELECT AVG(ict_score) FROM students`。"
    },
    {
        "id": 7,
        "title": "單元七：分組 (GROUP BY)",
        "description": "GROUP BY 語句用於結合聚合函數，根據一個或多個欄位對結果集進行分組。這是考試中的難點。",
        "keywords": ["GROUP BY", "COUNT()"],
        "task": "計算每個社 (house_id) 有多少名學生。",
        "expected_answer": "SELECT house_id, COUNT(*) FROM students GROUP BY house_id",
        "hint": "你需要選取 house_id 和 COUNT(*)，然後在最後加上 `GROUP BY house_id`。"
    },
    {
        "id": 8,
        "title": "單元八：跨表查詢 (INNER JOIN)",
        "description": "這是 HKDSE 最重要的概念之一。當資料分散在兩個表中 (例如學生表和社表)，我們需要用 JOIN 將它們連接起來。",
        "keywords": ["INNER JOIN", "ON", "資料表連接"],
        "task": "列出學生姓名 (name) 及其所屬社的名稱 (house_name)。(提示：students.house_id 對應 houses.id)",
        "expected_answer": "SELECT students.name, houses.house_name FROM students INNER JOIN houses ON students.house_id = houses.id",
        "hint": "語法結構：`FROM students INNER JOIN houses ON students.house_id = houses.id`"
    },
    {
        "id": 9,
        "title": "單元九：左外連接 (LEFT JOIN)",
        "description": "與 INNER JOIN 不同，LEFT JOIN 會保留「左邊」表格的所有記錄。即使右邊表格沒有匹配 (例如學生沒有社)，該學生仍會顯示，但社名稱會是 NULL。",
        "keywords": ["LEFT JOIN", "NULL"],
        "task": "列出**所有**學生姓名及其社名稱 (包括沒有社的學生)。",
        "expected_answer": "SELECT students.name, houses.house_name FROM students LEFT JOIN houses ON students.house_id = houses.id",
        "hint": "將 INNER JOIN 改為 LEFT JOIN。語法：`FROM students LEFT JOIN houses...`"
    },
    {
        "id": 10,
        "title": "單元十：分組後篩選 (HAVING)",
        "description": "這是一個常見陷阱：`WHERE` 用於篩選**原始資料**，而 `HAVING` 用於篩選**分組後(GROUP BY)** 的統計結果。",
        "keywords": ["GROUP BY", "HAVING", "COUNT()"],
        "task": "找出擁有 2 名或以上學生的社 (house_id)。",
        "expected_answer": "SELECT house_id, COUNT(*) FROM students GROUP BY house_id HAVING COUNT(*) >= 2",
        "hint": "先使用 `GROUP BY house_id`，然後在最後加上 `HAVING COUNT(*) >= 2`。"
    },
    {
        "id": 11,
        "title": "單元十一：子查詢 (Subquery - WHERE IN)",
        "description": "子查詢是指在一個 SQL 語句中嵌套另一個查詢。這常用於當我們不知道具體 ID，只知道名稱時。",
        "keywords": ["IN", "SELECT", "()"],
        "task": "找出所有屬於 'Red House' 的學生 (不使用 JOIN，使用子查詢)。",
        "expected_answer": "SELECT * FROM students WHERE house_id IN (SELECT id FROM houses WHERE house_name = 'Red House')",
        "hint": "結構：`WHERE house_id IN (SELECT id FROM ...)`。"
    },
    {
        "id": 12,
        "title": "單元十二：子查詢 (Subquery - 比較)",
        "description": "我們也可以將數值與子查詢的結果進行比較。這在計算「高於平均」等問題時非常有用。",
        "keywords": [">", "AVG()", "Subquery"],
        "task": "找出 ICT 分數高於全班平均分的學生。",
        "expected_answer": "SELECT * FROM students WHERE ict_score > (SELECT AVG(ict_score) FROM students)",
        "hint": "條件是 `WHERE ict_score > (...)`，括號內需計算平均分。"
    }
    ,
    {
        "id": 21,
        "title": "綜合挑戰：跨表查詢 (3 Tables)",
        "description": "我們需要連接 3 個表格：學生、成績、科目。找出誰考了 ICT 及其分數。",
        "keywords": ["JOIN", "Multiple Tables"],
        "task": "列出所有考 'Info & Comm Tech' (ICT) 的學生姓名及分數。",
        "expected_answer": "SELECT students.name, results.score FROM students JOIN results ON students.id = results.student_id WHERE results.subject_code = 'ICT'",
        "hint": "你需要連接 `students` 和 `results`，然後用 `WHERE subject_code = 'ICT'`。"
    },
    {
        "id": 22,
        "title": "綜合挑戰：班級統計",
        "description": "結合篩選與計算。校長想知道 6A 班的數學成績如何。",
        "keywords": ["AVG", "JOIN", "WHERE"],
        "task": "計算 '6A' 班學生的數學科 (MATH) 平均分。",
        "expected_answer": "SELECT AVG(results.score) FROM results JOIN students ON results.student_id = students.id WHERE students.class = '6A' AND results.subject_code = 'MATH'",
        "hint": "連接 `students` 和 `results`。條件是 `class='6A'` 和 `subject_code='MATH'`。"
    },
    {
        "id": 23,
        "title": "綜合挑戰：尋找缺席者 (Missing Data)",
        "description": "找出資料庫中「不存在」的關係。這通常需要 LEFT JOIN 和 IS NULL。",
        "keywords": ["LEFT JOIN", "IS NULL"],
        "task": "找出沒有任何考試成績記錄的學生姓名。",
        "expected_answer": "SELECT students.name FROM students LEFT JOIN results ON students.id = results.student_id WHERE results.score IS NULL",
        "hint": "使用 `LEFT JOIN results`，然後篩選 `WHERE results.score IS NULL`。"
    },
    {
        "id": 24,
        "title": "綜合挑戰：社際總冠軍 (Complex Grouping)",
        "description": "這是最難的題目。我們需要計算每個社的總平均分，並找出第一名。",
        "keywords": ["GROUP BY", "ORDER BY", "LIMIT"],
        "task": "列出每個社 (House) 的名稱以及該社所有學生的所有科目平均分，並按分數由高至低排列。",
        "expected_answer": "SELECT houses.name, AVG(results.score) FROM houses JOIN students ON houses.id = students.house_id JOIN results ON students.id = results.student_id GROUP BY houses.name ORDER BY AVG(results.score) DESC",
        "hint": "連接 `houses` -> `students` -> `results`。然後 `GROUP BY houses.name`。"
    }
];
