import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Form,
  Message,
  Divider,
  TextArea,
  Loader,
  Segment
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
    }, 1000);
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
          header="Convert CSV into Tables"
          content="Convert only (,) delimited CSV into tables "
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
              label="Copy / Paste (,) delimited CSV file only"
              placeholder="Copy / Paste (,) delimited CSV file only"
              rows="10"
              // defaultValue={`date,number,4digit, 5digit
              // 19-Oct-2018,56000,3333,55555
              // 19-Nov-2018,20000,3333,55555
              // 19-Dec-2018,28000,3333,55555
              // 19-Jan-2019,28000,3333,55555
              // 19-Feb-2019,28000,3333,55555
              // 19-Mar-2019,28000,3333,55555
              // 19-Apr-2019,28000,3333,55555
              // 30-Apr-2019,10267,1222,55555`}
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
          This app is an experimental demo purpose and not fully tested. The
          software is provided "As is", without warranty of any kind, express or
          implied. In no event shall the developer be liable for any claim,
          damages or other liability, whether in an action of contract, tort or
          otherwise, arising from, out of or in connection with the software or
          the use or other dealings in this demo.
        </Message>
      </div>
      <Divider section />
      {loader ? (
        <Loader active inline="centered" />
      ) : (
        <ExcelTable data={state} />
      )}
    </Container>
  );
};

export default Excel;
