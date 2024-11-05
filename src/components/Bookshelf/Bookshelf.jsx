import { useState } from 'react';


const defaultFormData = {
    title: '',
    author: '',
  };

function Bookshelf() {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [newBook, setNewBook] = useState({ 
        title: '', 
        author: '' 
    });

    const [formData, setFormData] = useState(defaultFormData);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        
        setNewBook({
            ...newBook,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setBooks([...books, newBook])

        setFormData(defaultFormData)
    }


    
    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Book Title: </label>
                    <input 
                    id="title" 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                    <label htmlFor="author">Book Author: </label>
                    <input 
                    id="author" 
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    />
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {
                    books.map((book, index) => {
                        return (
                            <div key={index} className="bookCard">
                                <h5>{book.title}</h5>
                                <h5>By: {book.author}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Bookshelf;