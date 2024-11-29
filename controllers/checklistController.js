const apiService = require('../services/apiService');
const rules = require('../rules/checklistRules');

const evaluateChecklist = async (req, res) => {
  try {
    const data = await apiService.fetchApplicationData();
    const results = rules.map((rule) => ({
      rule: rule.name,
      status: rule.check(data) ? 'Passed' : 'Failed',
    }));

    res.json(results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to evaluate checklist.' });
  }
};

module.exports = { evaluateChecklist };
