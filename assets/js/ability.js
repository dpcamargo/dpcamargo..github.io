let abilityTitle = document.getElementById("ability_title");
let abilityList = document.getElementById("ability_list");

document.getElementById("icon_coding").addEventListener("mouseover", () => {
  abilityTitle.innerHTML = "Linguagens de Programação e Banco de Dados";
  abilityList.innerHTML = `
    <li>Python com foco em análise de dados.</li>
    <li>Web scraping com Python.</li>
    <li>SQL para extração de Dados.</li>
    <li>R para modelagem estatística.</li>
    <li>Banco de Dados SQLite, Postgres, MySQL, Oracle, MongoDB e Cassandra.</li>
    `;
});

document
  .getElementById("icon_machine_learning")
  .addEventListener("mouseover", () => {
    abilityTitle.innerHTML = "Estatística e Machine Learning";
    abilityList.innerHTML = `
    <li>Estatística descritiva (localização, dispersão, assimetria, kurtosis, densidade).</li>
    <li>Algoritmos de regressão, classificação, clusterização e "learn to rank".</li>
    <li>Técnicas de balanceamento dos dados, seleção de atributos e redução de dimensionalidade.</li>
    <li>Métricas de performance dos algoritmos (RMSE, MAE, MAPE, Confusion Matrix, Precisão, Recall, Curva ROC, Curva Lift, AUC, Silhouette Score, DB-Index).</li>
    <li>Pacotes de Machine Learning: Sklearn e Scipy.</li>
    `;
  });

document
  .getElementById("icon_visualization")
  .addEventListener("mouseover", () => {
    abilityTitle.innerHTML = "Visualização de dados";
    abilityList.innerHTML = `
    <li>Matplotlib, Seaborn, Plotly e Bokeh.</li>
    <li>Power BI, Tableau, Metabase e Looker.</li>
    `;
  });

  document
  .getElementById("icon_software")
  .addEventListener("mouseover", () => {
    abilityTitle.innerHTML = "Engenharia de Software";
    abilityList.innerHTML = `
    <li>Git, Github, Gitlab, Cooiecutter, Virtual Environment e Docker.</li>
    <li>Streamlit, Flask, Python API's.</li>
    <li>Cloud Heroku, AWS Amazon, Google Cloud Platform (GCP) e Azure.</li>
    `;
  });
