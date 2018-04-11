import { withStyles } from 'material-ui/styles';
import Switch from 'material-ui/Switch';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import InputParser from '../../../common/default-input-parser';
import { InputHelper } from '../helpers/InputDescriptionHelper';

const styles = theme => {
    return {
        bar: {},
        checked: theme.custom.form.bool.checked,
        box: theme.custom.form.box
    };
};

class _Bool extends React.Component {
    constructor() {
        super();
        this.state = {
            value: undefined
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    componentDidMount() {
        this.props.handleValidateInput(this.props.name, () => true);
    }

    handleOnChange(e) {
        const value = InputParser(e);
        this.setState({ value });
        this.props.handleInputChange(this.props.name, value);
    }

    render() {
        const { description, label, name, handleDescriptionHelper, value, classes, isRequired } = this.props;
        return (
            <div>
                <Typography type="subheading">
                    {label}<span hidden={!isRequired}>&nbsp;*</span><InputHelper hidden={!description} referenceName={name} onDescriptionHelperUpdate={handleDescriptionHelper}/>
                    <Switch
                        onChange={this.handleOnChange}
                        checked={value}
                        classes={{
                            checked: classes.checked,
                            bar: classes.bar
                        }}
                    />
                </Typography>
            </div>
        );
    }
}

_Bool.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.bool,
    label: PropTypes.string.isRequired,
    description: PropTypes.string,
    handleInputChange: PropTypes.func.isRequired,
    handleDescriptionHelper: PropTypes.func.isRequired,
    handleValidateInput: PropTypes.func.isRequired
};

export const Bool = withStyles(styles)(_Bool);
