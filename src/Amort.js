import React, {Component} from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToBalance } from './actions/amortizationActions';

export class Amort extends Component {
    constructor() {
        super();
        this.state = { term: 360, addAmount: 0 };
    }

    updateAddToLoanAmount(event){
      this.setState({ addAmount: event.target.value});
    }

    render() {
        return (
        <div id='amortRoot'>
            <Form>
                 <FormGroup>
                    <ControlLabel>Add to Loan</ControlLabel>
                    <FormControl type="text" onChange={this.updateAddToLoanAmount.bind(this)}/>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Loan amount</ControlLabel>
                    <FormControl value={this.props.amount} type="text" />
                </FormGroup>

                 <FormGroup>
                    <ControlLabel>Term</ControlLabel>
                    <FormControl value={this.state.term} />
                </FormGroup>

                <Button onClick={() => this.props.addToBalance(this.state.addAmount)}>
                    Select
                </Button>
            </Form>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({amount: state.amount});

export default connect(mapStateToProps,{addToBalance})(Amort);
