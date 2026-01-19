import React, { Component } from 'react';

class First extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    log = () => {

        this.setState({ index:  0 })

    };


    reg = () => {

    };
    render() {
        return (
            <>
                <button type="button" class="btn btn-primary" onClick={this.log}>Login</button>
                <button type="button" class="btn btn-primary" onClick={this.reg}>Register</button>
                <div class="container text-center" >
                    <div class="row justify-content-center">
                        <div class="col-4" style={{
                                display: this.state.index == 0 ? "block" : "none"
                            }}>
                            <form class="row g-3 needs-validation" noValidate >
                                <div class="col-md-4">
                                    <label htmlFor="validationCustom01" class="form-label">First name</label>
                                    <input type="text" class="form-control" id="validationCustom01" defaultValue="Mark" required />
                                    <div class="valid-feedback">Looks good!</div>
                                </div>

                                <div class="col-md-4">
                                    <label htmlFor="validationCustom02" class="form-label">Last name</label>
                                    <input type="text" class="form-control" id="validationCustom02" defaultValue="Otto" required />
                                    <div class="valid-feedback">Looks good!</div>
                                </div>

                                <div class="col-md-4">
                                    <label htmlFor="validationCustomUsername" class="form-label">Username</label>
                                    <div class="input-group has-validation">
                                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="validationCustomUsername"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                        />
                                        <div class="invalid-feedback">Please choose a username.</div>
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <label htmlFor="validationCustom04" class="form-label">State</label>
                                    {/* Notice the select tag is NOT self-closing here */}
                                    <select class="form-select" id="validationCustom04" required>
                                        <option disabled value="">Choose...</option>
                                        <option value="1">State 1</option>
                                        <option value="2">State 2</option>
                                    </select>
                                    <div class="invalid-feedback">Please select a valid state.</div>
                                </div>

                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="invalidCheck" required />
                                        <label class="form-check-label" htmlFor="invalidCheck">
                                            Agree to terms and conditions
                                        </label>
                                        <div class="invalid-feedback">You must agree before submitting.</div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Submit form</button>
                                </div>
                            </form>

                        </div>








                        <div class="col-4" style={{
                                display: this.state.index == 1 ? "block" : "none"
                            }}>
                            <form className="was-validated" >
                                {/* Textarea Section */}
                                <div className="mb-3">
                                    <label htmlFor="validationTextarea" className="form-label">Textarea</label>
                                    <textarea
                                        className="form-control"
                                        id="validationTextarea"
                                        placeholder="Required example textarea"
                                        required
                                    ></textarea>
                                    <div className="invalid-feedback">
                                        Please enter a message in the textarea.
                                    </div>
                                </div>

                                {/* Checkbox Section */}
                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="validationFormCheck1" required />
                                    <label className="form-check-label" htmlFor="validationFormCheck1">Check this checkbox</label>
                                    <div className="invalid-feedback">Example invalid feedback text</div>
                                </div>

                                {/* Radio Buttons Section */}
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
                                    <label className="form-check-label" htmlFor="validationFormCheck2">Toggle this radio</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input type="radio" className="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
                                    <label className="form-check-label" htmlFor="validationFormCheck3">Or toggle this other radio</label>
                                    <div className="invalid-feedback">More example invalid feedback text</div>
                                </div>

                                {/* Select Menu */}
                                <div className="mb-3">
                                    <select className="form-select" required aria-label="select example" defaultValue="">
                                        <option value="">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <div className="invalid-feedback">Example invalid select feedback</div>
                                </div>

                                {/* File Input */}
                                <div className="mb-3">
                                    <input type="file" className="form-control" aria-label="file example" required />
                                    <div className="invalid-feedback">Example invalid form file feedback</div>
                                </div>

                                {/* Submit Button */}
                                <div className="mb-3">
                                    <button className="btn btn-primary" type="submit" disabled>Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default First;