from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

ARTICLES = [
    {
        "title": "New Tech Unveiled",
        "content": "A tech company released a gadget...",
        "image": "https://via.placeholder.com/300x150?text=Tech"
    },
    {
        "title": "Championship Highlights",
        "content": "Thrilling sports finals...",
        "image": "https://via.placeholder.com/300x150?text=Sports"
    },
    {
        "title": "Global Summit",
        "content": "Leaders gather to discuss issues...",
        "image": "https://via.placeholder.com/300x150?text=World"
    },
    {
        "title": "Park Renovation Completed",
        "content": "New green spaces and trails...",
        "image": "https://via.placeholder.com/300x150?text=Local"
    }
]


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/search')
def search():
    query = request.args.get('q', '').lower()
    results = [
        article for article in ARTICLES
        if query in article['title'].lower() or query in article['content'].lower()
    ]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
