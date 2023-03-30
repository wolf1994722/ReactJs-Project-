import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './static/app.css'

function Accordation(props) {
    const [flag, setFlag] = useState(false)
    return (
        <>
            <div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded={flag === false ? 'false' : 'true'} aria-controls="collapseOne" onClick={() => setFlag(!flag)}>
                        Question 📚 #{props.id} {props.questions}
                    </button>
                </h2>
                {flag && <div id="collapseOne" class={flag === 'false' ? "accordion-collapse collapse" : "accordion-collapse collapse show"} data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        {props.answer}
                    </div>
                </div>}
            </div>
        </>
    )
}

export default Accordation