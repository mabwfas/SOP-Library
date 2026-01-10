
import os

file_path = r'c:\Users\reals\.gemini\antigravity\playground\shimmering-einstein\sops\training\sales-training-data.js'

new_task2 = """// Task 2 Content: Company Knowledge - THE DIGITAL HEROES ECOSYSTEM
const task2Content = `
<h2>📚 TASK 2: THE DIGITAL HEROES ECOSYSTEM</h2>

<div class="content-section">
<h3>🚀 Our Origin Story</h3>
<p>Digital Heroes didn't start as an agency. It started as a mission.</p>
<div class="story-box" style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 12px; padding: 25px; margin: 20px 0;">
    <h4 style="color: #10B981; margin-top: 0;">From Freelancer to Empire (2018-Present)</h4>
    <p>In 2018, we were just exhausted freelancers tired of seeing clients get ripped off by "agencies" who charged $5,000 for $50 template websites.</p>
    <p>We decided to do something radical: <strong>teach the secrets for free.</strong></p>
    <p>We launched the <strong style="color: #F8FAFC;">Digital Marketing Heroes</strong> YouTube channel. We revealed everything — how to code, how to design, how to market.</p>
    <p><strong>The Result?</strong></p>
    <ul>
        <li>Millions watched our videos.</li>
        <li>Thousands learned to code.</li>
        <li><strong>But business owners said:</strong> "We love your honesty. We don't want to learn. We just want YOU to build it."</li>
    </ul>
    <p>That's how our agency was born. Built on trust, education, and radical transparency.</p>
</div>
</div>

<div class="content-section">
<h3>🌍 The Ecosystem</h3>
<p>We are not just a service provider. We are a vertically integrated ecosystem:</p>
<div class="highlight-box" style="background: transparent; border: none; padding: 0;">
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        <div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="font-size: 2em; margin-bottom: 10px;">📺</div>
            <h4 style="color: #F8FAFC; margin: 0 0 10px 0;">The Media Arm</h4>
            <p style="font-size: 0.9em; color: #94A3B8;">2.5M+ Subscribers. This is our lead magnet. Clients trust us before they even speak to you because they've watched 10 hours of our content.</p>
        </div>
        <div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="font-size: 2em; margin-bottom: 10px;">🛠️</div>
            <h4 style="color: #F8FAFC; margin: 0 0 10px 0;">The Agency Arm</h4>
            <p style="font-size: 0.9em; color: #94A3B8;">Premium high-ticket execution. Where you come in. We serve the top 1% of clients who want the best.</p>
        </div>
        <div style="background: rgba(30, 41, 59, 0.6); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
            <div style="font-size: 2em; margin-bottom: 10px;">👥</div>
            <h4 style="color: #F8FAFC; margin: 0 0 10px 0;">The Talent Pool</h4>
            <p style="font-size: 0.9em; color: #94A3B8;">40+ Full-time developers. We don't outsource to randoms. We hire the best students from our own community.</p>
        </div>
    </div>
</div>
</div>

<div class="content-section">
<h3>💰 Your Commission Structure</h3>
<p>We believe in sharing the wealth. This is high-ticket sales, and you are paid for closing high-ticket deals.</p>

<div class="warning-box" style="background: rgba(16, 185, 129, 0.1); border-color: #10B981;">
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;">
        <div>
            <h3 style="color: #10B981; border: none; margin: 0;">5% Commission</h3>
            <p style="margin: 5px 0 0 0; color: #CBD5E1;">On all projects above $5,000</p>
        </div>
        <div style="text-align: right;">
            <div style="font-size: 1.5em; font-weight: 700; color: #FFF;">Passive Income</div>
            <div style="color: #94A3B8; font-size: 0.9em;">(Paid on Milestone Completion)</div>
        </div>
    </div>
</div>

<table style="width: 100%; margin: 25px 0; border-collapse: separate; border-spacing: 0 10px;">
    <thead>
        <tr style="color: #94A3B8; text-align: left;">
            <th style="padding: 10px;">Project Value</th>
            <th style="padding: 10px;">Your Commission</th>
            <th style="padding: 10px;">Example Check</th>
        </tr>
    </thead>
    <tbody>
        <tr style="background: rgba(255,255,255,0.03);">
            <td style="padding: 15px; border-radius: 8px 0 0 8px;"><strong>Under $5,000</strong></td>
            <td style="padding: 15px;">0% (Base Salary Only)</td>
            <td style="padding: 15px; border-radius: 0 8px 8px 0; color: #94A3B8;">$0</td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.1);">
            <td style="padding: 15px; border-radius: 8px 0 0 8px;"><strong>$6,000 Project</strong></td>
            <td style="padding: 15px; color: #10B981; font-weight: bold;">5% Flat</td>
            <td style="padding: 15px; border-radius: 0 8px 8px 0; color: #10B981; font-weight: bold;">$300</td>
        </tr>
        <tr style="background: rgba(16, 185, 129, 0.2);">
            <td style="padding: 15px; border-radius: 8px 0 0 8px;"><strong>$10,000 Project</strong></td>
            <td style="padding: 15px; color: #10B981; font-weight: bold;">5% Flat</td>
            <td style="padding: 15px; border-radius: 0 8px 8px 0; color: #10B981; font-weight: bold;">$500</td>
        </tr>
    </tbody>
</table>
<p style="font-size: 0.9em; opacity: 0.7;">*Note: Commission is paid 7 days after the client's final payment clears. No commission on "MVP" or discounted packages (which we shouldn't be selling anyway).</p>
</div>

<div class="content-section">
<h3>🚫 The "No Discount" Philosophy</h3>
<p>You will be tempted to give discounts. <strong>Don't.</strong></p>
<div class="highlight-box">
    <strong>Why we never discount:</strong>
    <ol style="margin-top: 10px; line-height: 1.8;">
        <li><strong>It insults existing clients:</strong> Why should Client B pay less than Client A for the same work?</li>
        <li><strong>It attracts nightmares:</strong> Clients who fight for $100 off will fight for every pixel.</li>
        <li><strong>It signals weakness:</strong> "If your price is flexible, your value is fake."</li>
    </ol>
</div>
<p><strong>What to say instead:</strong></p>
<div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border-left: 3px solid #F59E0B; margin-top: 15px;">
    "I totally understand the budget constraints. I can't lower the price because I can't ask my team to lower their quality. However, we could <strong>remove the blog migration</strong> and bringing the cost down to [Price]. Would that help?"
</div>
</div>

<div class="content-section">
<h3>🎯 What We Actually Sell</h3>
<p>You're not selling "a website" or "Shopify development." You're selling:</p>
<div class="highlight-box">
    <ul style="margin-bottom: 0;">
        <li>🚀 <strong>Revenue:</strong> CRO-optimized stores that convert visitors into customers</li>
        <li>⚡ <strong>Speed:</strong> Fast-loading sites that don't lose impatient visitors</li>
        <li>💎 <strong>Credibility:</strong> Professional design that makes their brand look trustworthy</li>
        <li>🛡️ <strong>Peace of mind:</strong> Expert team + support period = they're not alone</li>
        <li>⏰ <strong>Time:</strong> They can focus on their business while we handle the technical work</li>
    </ul>
</div>
<p style="margin-top: 15px;">When a client says "I want a Shopify store," what they ACTUALLY want is <strong>a successful online business</strong>. We deliver that.</p>
</div>

<div class="content-section">
<h3>🚩 Red Flag Clients</h3>
<p>Not every client deserves our time. Learn to spot problematic clients early:</p>
<table style="width: 100%; margin: 15px 0; border-collapse: collapse;">
    <tr style="background: rgba(239, 68, 68, 0.15);">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>🚩 Red Flag</strong></td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);"><strong>Why It's Bad</strong></td>
    </tr>
    <tr style="background: rgba(239, 68, 68, 0.05);">
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"My last 4 developers were terrible"</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">The common factor in all failures is THEM</td>
    </tr>
    <tr>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"Can you match this $300 quote?"</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Price-shopper who will haggle forever</td>
    </tr>
    <tr>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I'll pay after I see the final work"</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Doesn't trust anyone — endless revisions, possible non-payment</td>
    </tr>
    <tr>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">"I need this in 2 days" (complex project)</td>
        <td style="padding: 12px; border: 1px solid rgba(255,255,255,0.1);">Unrealistic expectations, will blame you when it's not perfect</td>
    </tr>
</table>
<div class="warning-box">
    <strong>The 2+ Red Flags Rule:</strong> If a lead shows 2 or more red flags, politely disqualify them. Your time is better spent on quality clients.
</div>
</div>

<div class="content-section">
<h3>🚀 Ready for the Quiz?</h3>
<p>You've learned about Digital Heroes' positioning, rules, and values. Now prove your understanding.</p>
<ul>
    <li>📝 10 questions about company knowledge</li>
    <li>🎯 Score <strong>10/10</strong> to proceed to Task 3</li>
</ul>
</div>
`;
"""

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the start and end of Task 2
    start_marker = "// Task 2 Content: Company Knowledge"
    end_marker = "// Task 3 Content: Product Mastery"

    start_idx = content.find(start_marker)
    end_idx = content.find(end_marker)

    if start_idx == -1 or end_idx == -1:
        print("Could not find markers!")
        exit(1)

    # Reconstruct the file
    new_content = content[:start_idx] + new_task2 + "\n\n" + content[end_idx:]

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("Success")

except Exception as e:
    print(f"Error: {e}")
