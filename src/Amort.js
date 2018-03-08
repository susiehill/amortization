import React, {Component} from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addToBalance } from './actions/amortizationActions';

export class Amort extends Component {
    constructor(props) {
        super(props);
        this.state = { term: 360, addAmount: 0 };

    }

    updateAddToLoanAmount = event => {
      this.setState({ addAmount: event.target.value});
    }

    render() {
        const { addAmount, term } = this.state;
        const { amount, addToBalance } = this.props;

        return (
        <div id='amortRoot'>
            <Form>
                 <FormGroup>
                    <ControlLabel>Add to Loan</ControlLabel>
                    <FormControl  id="addAmount" type="text" value={addAmount} onChange={this.updateAddToLoanAmount}/>
                </FormGroup>

                <FormGroup>
                    <ControlLabel>Loan amount</ControlLabel>
                    <FormControl id="loanAmount" value={amount} type="text" />
                </FormGroup>

                 <FormGroup>
                    <ControlLabel>Term</ControlLabel>
                    <FormControl value={term} readOnly />
                </FormGroup>

                <Button id="addBtn" onClick={() => {
                        addToBalance(addAmount);
                    }
                }>
                    Select
                </Button>
            </Form>
        </div>
        );
    }
}

const mapStateToProps = (state) => ({amount: state.amount});

const mapDispatchToProps = (dispatch) => {
    return {
        addToBalance(amount) {
            dispatch( addToBalance(amount) );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Amort);
