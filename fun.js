function showTab(tabId) {
      const contents = document.querySelectorAll('.tab-content');
      const tabs = document.querySelectorAll('.tab');

      contents.forEach(el => el.classList.remove('active'));
      tabs.forEach(el => el.classList.remove('active'));

      document.getElementById(tabId).classList.add('active');
      event.target.classList.add('active');
    }

    function toggleCollapse() {
      const content = document.getElementById("aboutMore");
      content.style.display = content.style.display === "block" ? "none" : "block";
    }