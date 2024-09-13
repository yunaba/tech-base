// 1. APIのURLを指定
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// 2. データを表示するためのHTML要素を取得
const apiDataDiv = document.getElementById('api-data');

// 3. fetchを使ってデータを取得
fetch(apiUrl)
  .then(response => {
      // 4. レスポンスが正常かどうかを確認
    if (!response.ok) {
      throw new Error('ネットワークの応答が正常ではありません');
    }
      // 5. JSON形式でレスポンスをパース
    return response.json();
  })
  .then(data => {
      // 6. 取得したデータをHTMLに埋め込む
      let htmlContent = '<ul>';
      data.forEach(post => {
        htmlContent += `
          <li>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </li>
        `;
      });
      htmlContent += '</ul>';
      apiDataDiv.innerHTML = htmlContent;
    })
  .catch(error => {
      // エラーが発生した場合の処理
    console.error('データの取得に失敗しました:', error);
    apiDataDiv.innerHTML = '<p>データの取得に失敗しました。</p>';
  });