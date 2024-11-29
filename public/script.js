document.addEventListener('DOMContentLoaded', async () => {
    const resultsDiv = document.getElementById('results');
  
    try {
      const response = await fetch('/api/checklist');
      const results = await response.json();
  
      results.forEach((result) => {
        const div = document.createElement('div');
        div.className = `result ${result.status.toLowerCase()}`;
        div.innerHTML = `<span>${result.rule}</span><span>${result.status}</span>`;
        resultsDiv.appendChild(div);
      });
    } catch (error) {
      resultsDiv.innerHTML = '<p>Failed to load checklist results.</p>';
    }
  });
  