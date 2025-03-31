// AI Engineer Pack Clone - Script

// Define the tools data
const toolsData = [
    {
        id: "elevenlabs",
        name: "ElevenLabs",
        logo: "assets/elevenlabs-symbol.svg",
        url: "https://elevenlabs.io/",
        description: "ElevenLabs has the best <a href='https://elevenlabs.io/text-to-speech' target='_blank'>Text to Speech</a> models and <a href='https://elevenlabs.io/conversational-ai' target='_blank'>Conversational AI</a> platform.",
        offer: "3 months free on the Creator plan (worth $55)"
    },
    {
        id: "notion",
        name: "Notion",
        logo: "assets/notion.png",
        url: "https://www.notion.com/",
        description: "The all-in-one workspace. Write. Plan. Collaborate. With a little help from AI.",
        offer: "Up to 6 months free with unlimited AI (worth $6k)"
    },
    {
        id: "intercom",
        name: "Intercom",
        logo: "assets/intercom.png",
        url: "https://www.intercom.com/",
        description: "Fin is a breakthrough <a href='https://www.intercom.com/drlp/ai-agent' target='_blank'>AI agent</a> that automatically solves customer issues.",
        offer: "100% off Intercom in year one offer, worth $12,000 in savings. 50% off in the second year, and 25% in year three."
    },
    {
        id: "mistral",
        name: "Mistral AI",
        logo: "assets/mistral.svg",
        url: "https://mistral.ai/",
        description: "Mistral AI builds industry-leading, cost-efficient and <a href='https://mistral.ai/technology/#fine-tuning' target='_blank'>customizable LLMs</a> and GenAI products.",
        offer: "$25 credit"
    },
    {
        id: "agentql",
        name: "AgentQL",
        logo: "assets/agentql.png",
        url: "https://agentql.com/",
        description: "AgentQL provides AI-powered data extraction and browser interaction tools for people and agents.",
        offer: "3 months of Professional Plan (worth $300)"
    },
    {
        id: "clerk",
        name: "Clerk",
        logo: "assets/clerk.png",
        url: "https://clerk.com/",
        description: "Clerk is a complete suite of <a href='https://clerk.com/docs/customization/elements/overview' target='_blank'>embeddable UIs</a>, flexible APIs, and admin dashboards to <a href='https://clerk.com/user-authentication' target='_blank'>authenticate and manage your users</a>.",
        offer: "50% off Clerk's Pro Plan for 6 months"
    },
    {
        id: "coval",
        name: "Coval",
        logo: "assets/coval.jpg",
        url: "https://www.coval.dev/",
        description: "Coval is the go-to platform for evaluating, simulating and monitoring your voice and chat agents.",
        offer: "$50 off for our \"Core\" plan"
    },
    {
        id: "daytona",
        name: "Daytona",
        logo: "assets/daytona.png",
        url: "https://daytona.io/",
        description: "Daytona is a Secure and Elastic Infrastructure for Running Your AI-Generated Code.",
        offer: "$1000 worth of compute credits for new users"
    },
    {
        id: "firecrawl",
        name: "Firecrawl",
        logo: "assets/firecrawl.png",
        url: "https://www.firecrawl.dev/",
        description: "Firecrawl is the easiest way to extract LLM-ready data from the web.",
        offer: "50,000 credits and 500,000 /extract tokens ($100~ value)"
    },
    {
        id: "huggingface",
        name: "HuggingFace",
        logo: "assets/huggingface.png",
        url: "https://huggingface.co/",
        description: "Hugging Face is the collaboration platform to share, explore, discover, and experiment with <a href='https://huggingface.co/models' target='_blank'>open-source ML</a>.",
        offer: "6 months of HF Pro"
    }
];

// Function to create tool cards
function createToolCards() {
    const toolsGrid = document.getElementById('tools-grid');
    
    // Clear existing content
    toolsGrid.innerHTML = '';
    
    // Add tools from data
    toolsData.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card rounded-xl border bg-white overflow-hidden shadow-none p-0 z-10';
        toolCard.id = tool.id;
        
        toolCard.innerHTML = `
            <div class="flex flex-col items-start p-0">
                <div class="flex items-center gap-3 w-full p-3 sm:p-6">
                    <div class="w-10 h-10 rounded-lg flex justify-center items-center shrink-0 overflow-hidden border">
                        <div class="w-full h-full">
                            <img alt="${tool.name} logo" class="object-contain w-full h-full" src="${tool.logo}">
                        </div>
                    </div>
                    <div>
                        <a href="${tool.url}" target="_blank" class="flex flex-col gap-1 group leading-3">
                            <h3 class="font-semibold group-hover:text-gray-700">${tool.name}</h3>
                        </a>
                    </div>
                    <div class="ml-auto">
                        <button class="redeem-button">Redeem</button>
                    </div>
                </div>
                <div class="px-3 sm:px-6 mb-3 sm:mb-4 flex">
                    <p class="card-description">${tool.description}</p>
                </div>
                <div class="border-t p-3 sm:px-6 sm:py-4 w-full bg-gray-50 text-sm font-medium text-gray-800 text-center">
                    <span class="line-clamp-2">${tool.offer}</span>
                </div>
            </div>
        `;
        
        toolsGrid.appendChild(toolCard);
    });
}

// Handle tab switching
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Just for demo, filter the content (would be expanded in a real implementation)
            createToolCards();
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createToolCards();
    setupTabs();
    
    // Add click handler for "Why?" link
    const whyLink = document.querySelector('.text-xs.underline');
    if (whyLink) {
        whyLink.addEventListener('click', () => {
            alert('The AI Engineer Pack provides exclusive discounts and offers for developers building AI applications.');
        });
    }
});

// Simple placeholder for missing images
function handleMissingImage(img) {
    img.onerror = null;
    img.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect fill="%23f0f0f0" width="100" height="100"/%3E%3Cpath fill="%23cccccc" d="M50 30 L70 70 L30 70 Z"/%3E%3C/svg%3E';
}