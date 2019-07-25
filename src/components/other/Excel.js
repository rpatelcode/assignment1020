import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Form,
  Message,
  Icon,
  TextArea,
  Header,
  Dimmer,
  Loader
} from "semantic-ui-react";
import useForm from "react-hook-form";
import { csv } from "csvtojson";
import ExcelTable from "./ExcelTable";
// import _ from "lodash";

// const csvStr = `a,b,c
// 1,2,3
// 4,5,6`;

// csv()
//   .fromString(csvStr)
//   .then(jsonObj => {
//     console.log(jsonObj); // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
//   });

const Excel = () => {
  //   csv({
  //     noheader: true,
  //     output: "csv"
  //   })
  //     .fromString(csvStr)
  //     .then(csvRow => {
  //       console.log(csvRow); // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
  //     });

  useEffect(() => {
    register(
      { name: "csv" },
      {
        required: true,
        // pattern: /,|\r?\n|"(\\"|[^"])*?"/g
        pattern: /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|"([^""]*(?:"[\S\s][^""]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g
      }
    );
  }, []);
  const {
    register,
    errors,
    handleSubmit,
    setValue,
    triggerValidation,
    formState
  } = useForm({ mode: "onChange" });

  // for loader
  const [loader, setLoader] = useState(false);
  // for Dimmer
  const [state, setState] = useState();
  //   const [active, setactive] = useState(false);
  const handleOpen = () => {
    // setactive(true);
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1);
  };

  const onSubmitReport = (data, e) => {
    e.preventDefault();
    // setState(data);

    // console.log(data.csv);

    csv()
      .fromString(data.csv)
      .then(jsonObj => {
        // console.log(jsonObj); // => [["1","2","3"], ["4","5","6"], ["7","8","9"]]
        setState(jsonObj);
      });

    // <ExcelTable data={state} />;
  };

  // console.log("state", state);

  return (
    <Container style={{ marginTop: "2em" }}>
      <div>
        <Message
          attached
          header="Daily Vehicle Inspection Report"
          content="Daily vehicle inspection report"
        />
        <Form
          className="attached fluid segment"
          onSubmit={handleSubmit(onSubmitReport)}
          success
        >
          <Form.Group widths="equal">
            <Form.Field
              id="csv"
              name="csv"
              control={TextArea}
              label="General Comments"
              placeholder="General Comments"
              defaultValue={`date,number,4digit, 5digit
              19-Oct-2018,56000,3333,55555
              19-Nov-2018,20000,3333,55555
              19-Dec-2018,28000,3333,55555
              19-Jan-2019,28000,3333,55555
              19-Feb-2019,28000,3333,55555
              19-Mar-2019,28000,3333,55555
              19-Apr-2019,28000,3333,55555
              30-Apr-2019,10267,1222,55555`}
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.csv ? true : false}
            />
          </Form.Group>

          <Button
            content="Submit"
            primary
            disabled={
              !formState.dirty || (formState.dirty && !formState.isValid)
            }
            onClick={handleOpen}
          />
        </Form>
        <Message attached="bottom">
          Tracking vehicle inspection and Mileage registry is a system that was
          launched in 2004. The system is currently being used to manage and
          track the status and historical details of vehicle usage dating back
          to 1834. The company of former municipalities that now make up the
          current town has passed more than 200,000 vehicles that are still in
          records. Questions about this collection should be directed to: Deputy
          Registrar General, P.O. Box 468900 10899, Green River Road, Thunder
          Bay, ON P7X 6HT8 or at 1-87090-47691-21956 or 4816-32895-839805.
        </Message>
      </div>
      <div>
        {
          //   loader ? <Loader content="Submitting" size="large" /> : null
        }
        <ExcelTable data={state} />
      </div>
    </Container>
  );
};

export default Excel;
