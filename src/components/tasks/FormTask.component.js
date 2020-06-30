import React from 'react';

const FormTaskComponent = () => {
    return (
        <div className="formular">
            <form>
                <div className="container-input">
                    <input type="text"
                    className="input-text"
                    placeholder="Task Name..."
                    name="name"
                    />
                </div>

                <div className="container-input">
                    <input type="submit"
                    className="btn btn-primary btn-submit btn-block"
                    value="Add Task"
                    />
                </div>
            </form>
        </div>
    )
}

export default FormTaskComponent;
