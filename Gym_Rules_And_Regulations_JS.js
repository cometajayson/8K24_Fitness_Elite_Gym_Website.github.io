document.addEventListener("DOMContentLoaded", function() {
    const rulesList = document.getElementById("rulesList");

    // Sample rules data
    const rules = [
        { rule: "Rule 1", description: "Description of rule 1." },
        { rule: "Rule 2", description: "Description of rule 2." },
        { rule: "Rule 3", description: "Description of rule 3." }
        // Add more rules as needed
    ];

    // Function to populate rules
    function populateRules() {
        rules.forEach(rule => {
            const li = document.createElement("li");
            li.innerHTML = `<span class="rule">${rule.rule}:</span> <span class="description">${rule.description}</span>`;
            rulesList.appendChild(li);
        });
    }

    // Call the function to populate rules when the DOM is loaded
    populateRules();
});
