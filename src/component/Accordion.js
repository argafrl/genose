import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordionInfo = (props) => {
    const summary = props.summary;
    const details = props.details;
    return (
        <div className="accordion-wrapper">
            <Accordion className="accordion">
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="accordionSummary"
                >
                    <Typography>{summary}</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordionDetails">
                    <Typography>
                    {details}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
 
export default AccordionInfo;