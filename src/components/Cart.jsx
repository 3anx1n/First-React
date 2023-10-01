import './Cart.css'

const Cart = ({selected}) => (
  <div className="cart">
    {
      selected.length === 0
      ? <h2>Click to Select Courses</h2>
      : Object.entries(selected).map(([key, course]) => (
          <div key={key}>
            <h1>{course.term} CS{course.number}</h1> <p>{course.title}</p><p>{course.meets}</p>
          </div>
        ))
    }
  </div>
);

export default Cart;