import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Form,
  Message,
  Input,
  Icon,
  Radio,
  TextArea,
  Select,
  Header,
  Dimmer
} from "semantic-ui-react";
import useForm from "react-hook-form";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
// import FormEnter from "../../components/Form";
import _ from "lodash";
import "../../css/_datepicker.css";

const vehicleList = [
  { key: "vh1", text: "003018", value: "003018" },
  { key: "vh2", text: "004879", value: "004879" },
  { key: "vh3", text: "092100", value: "092100" }
];

const FormEnter = () => {
  useEffect(() => {
    register({ name: "vehicleNum" }, { required: true });
    register({ name: "date" });

    register({ name: "ownership" });
    register({ name: "insurance" });
    register({ name: "plateSticker" });
    register({ name: "firstAidKit" });

    register({ name: "accidentForm" });
    register({ name: "exteriorBody" });
    register({ name: "fluidLeaks" });
    register({ name: "tireInflation" });

    register({ name: "wheelsCondition" });
    register({ name: "steering" });
    register({ name: "brake" });
    register({ name: "dashboardWarning" });

    register({ name: "lights" });
    register({ name: "signal" });
    register({ name: "mirrors" });
    register({ name: "windshield" });

    register({ name: "wipers" });
    register({ name: "defroster" });
    register({ name: "horn" });
    register({ name: "backupAlarm" });

    register({ name: "beacon" });
    register({ name: "tc12" });
    register({ name: "cones" });
    register({ name: "signs" });

    register({ name: "generalComments" }, { required: true });
    register({ name: "odometerStart" }, { required: true });
    register({ name: "odometerEnd" }, { required: true });
    register({ name: "personalUse" });

    // setValue("ownership", "no");
    // setValue("insurance", "no");
    // setValue("plateSticker", "no");
    // setValue("firstAidKit", "no");

    // setValue("accidentForm", "no");
    // setValue("exteriorBody", "no");
    // setValue("fluidLeaks", "no");
    // setValue("tireInflation", "no");

    // setValue("wheelsCondition", "no");
    // setValue("steering", "no");
    // setValue("brake", "no");
    // setValue("dashboardWarning", "no");

    // setValue("lights", "no");
    // setValue("signal", "no");
    // setValue("mirrors", "no");
    // setValue("windshield", "no");

    // setValue("wipers", "no");
    // setValue("defroster", "no");
    // setValue("horn", "no");
    // setValue("backupAlarm", "no");

    // setValue("beacon", "no");
    // setValue("tc12", "no");
    // setValue("cones", "no");
    // setValue("signs", "no");
  }, []);

  const {
    register,
    errors,
    handleSubmit,
    setValue,
    getValues,
    triggerValidation,
    formState
  } = useForm({ mode: "onChange" });

  // for Dimmer
  const [state, setState] = useState();
  const [active, setactive] = useState(false);
  const handleOpen = () =>
    setTimeout(() => {
      setactive(true);
    }, 1000);

  const handleClose = () => setactive(false);

  // used for date
  const [focused, setFocused] = useState(false);

  // for form ON/Off fields

  const [ownership, setownership] = useState(false);
  const [insurance, setinsurance] = useState(false);
  const [plateSticker, setplateSticker] = useState(false);
  const [firstAidKit, setfirstAidKit] = useState(false);

  const [accidentForm, setaccidentForm] = useState(false);
  const [exteriorBody, setexteriorBody] = useState(false);
  const [fluidLeaks, setfluidLeaks] = useState(false);
  const [tireInflation, settireInflation] = useState(false);

  const [wheelsCondition, setwheelsCondition] = useState(false);
  const [steering, setsteering] = useState(false);
  const [brake, setbrake] = useState(false);
  const [dashboardWarning, setdashboardWarning] = useState(false);

  const [lights, setlights] = useState(false);
  const [signal, setsignal] = useState(false);
  const [mirrors, setmirrors] = useState(false);
  const [windshield, setwindshield] = useState(false);

  const [wipers, setwipers] = useState(false);
  const [defroster, setdefroster] = useState(false);
  const [horn, sethorn] = useState(false);
  const [backupAlarm, setbackupAlarm] = useState(false);

  const [beacon, setbeacon] = useState(false);
  const [tc12, settc12] = useState(false);
  const [cones, setcones] = useState(false);
  const [signs, setsigns] = useState(false);

  const onSubmitReport = (data, e) => {
    e.preventDefault();
    setState(data);
  };

  const temp = [
    exteriorBody ? "Exterior Body" : null,
    fluidLeaks ? "Fluid Leaks" : null,
    steering ? "Steering" : null,
    brake ? "Brake" : null,
    dashboardWarning ? "Dashboard Warning" : null
  ];

  const messageArray = _.without(temp, null);

  const ShowError = () => {
    if (messageArray.length > 0) {
      return (
        <Message
          warning
          header="If following marked as ON then must supply issue in general comments"
          list={messageArray}
        />
      );
    } else return null;
  };

  console.log(formState);

  return (
    <Container style={{ marginTop: "2em" }}>
      <div>
        <Message
          attached
          header="Vehicle Inspection Report"
          content="Daily vehicle inspection report"
        />
        <Form
          className="attached fluid segment"
          onSubmit={handleSubmit(onSubmitReport)}
          success
        >
          <Form.Group widths="equal">
            <Form.Field
              id="vehicleNum"
              name="vehicleNum"
              control={Select}
              options={vehicleList}
              label="List of vehicles"
              placeholder="List of vehicles"
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.vehicleNum ? true : false}
            />

            <Form.Field>
              <label>Date</label>
              <Icon name="calendar alternate outline" size="large" />
              <SingleDatePicker
                id="date"
                numberOfMonths={1}
                onDateChange={date => {
                  let name = "date";
                  setValue(name, date);
                }}
                onFocusChange={({ focused }) => setFocused(focused)}
                focused={focused}
                date={getValues().date}
                isOutsideRange={() => false}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                name="ownership"
                label="Ownership"
                value={ownership ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setownership(!ownership);
                  setValue(name, value);
                }}
                // onChange={async (e, { name, value }) => {
                //   setownership(!ownership);
                //   setValue(name, value);
                //   await triggerValidation({ name });
                // }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="insurance"
                label="Insurance"
                value={insurance ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setinsurance(!insurance);
                  setValue(name, value);
                }}
                // onChange={async (e, { name, value }) => {
                //   setinsurance(!insurance);
                //   setValue(name, value);
                //   await triggerValidation({ name });
                // }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="plateSticker"
                label="Plate Sticker"
                value={plateSticker ? "no" : "yes"}
                // onChange={async (e, { name, value }) => {
                //   setplateSticker(!plateSticker);
                //   setValue(name, value);
                //   await triggerValidation({ name });
                // }}
                onChange={(e, { name, value }) => {
                  setplateSticker(!plateSticker);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="firstAidKit"
                label="First Aid Kit"
                value={firstAidKit ? "no" : "yes"}
                // onChange={async (e, { name, value }) => {
                //   setfirstAidKit(!firstAidKit);
                //   setValue(name, value);
                //   await triggerValidation({ name });
                // }}
                onChange={(e, { name, value }) => {
                  setfirstAidKit(!firstAidKit);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                name="accidentForm"
                label="Accident Form"
                defaulvalue="no"
                value={accidentForm ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setaccidentForm(!accidentForm);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="exteriorBody"
                label="Exterior Body"
                defaulvalue="no"
                value={exteriorBody ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setexteriorBody(!exteriorBody);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="fluidLeaks"
                label="Fluid Leaks"
                defaulvalue="no"
                value={fluidLeaks ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setfluidLeaks(!fluidLeaks);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="tireInflation"
                label="Tire Inflation"
                defaulvalue="no"
                value={tireInflation ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  settireInflation(!tireInflation);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                name="wheelsCondition"
                label="Wheels Condition"
                defaulvalue="no"
                value={wheelsCondition ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setwheelsCondition(!wheelsCondition);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="steering"
                label="Steering"
                defaulvalue="no"
                value={steering ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setsteering(!steering);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="brake"
                label="Brake"
                defaulvalue="no"
                value={brake ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setbrake(!brake);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="dashboardWarning"
                label="Dashboard Warning"
                defaulvalue="no"
                value={dashboardWarning ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setdashboardWarning(!dashboardWarning);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                name="lights"
                label="Lights"
                defaulvalue="no"
                value={lights ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setlights(!lights);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="signal"
                label="Signal"
                defaulvalue="no"
                value={signal ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setsignal(!signal);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="mirrors"
                label="Mirrors"
                defaulvalue="no"
                value={mirrors ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setmirrors(!mirrors);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="windshield"
                label="Windshield"
                defaulvalue="no"
                value={windshield ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setwindshield(!windshield);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                name="wipers"
                label="Wipers"
                defaulvalue="no"
                value={wipers ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setwipers(!wipers);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="defroster"
                label="Defroster"
                defaulvalue="no"
                value={defroster ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setdefroster(!defroster);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="horn"
                label="Horn"
                defaulvalue="no"
                value={horn ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  sethorn(!horn);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="backupAlarm"
                label="Backup Alarm"
                defaulvalue="no"
                value={backupAlarm ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setbackupAlarm(!backupAlarm);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                name="beacon"
                label="Beacon"
                defaulvalue="no"
                value={beacon ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setbeacon(!beacon);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="tc12"
                label="TC-12"
                defaulvalue="no"
                value={tc12 ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  settc12(!tc12);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="cones"
                label="Cones"
                defaulvalue="no"
                value={cones ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setcones(!cones);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="signs"
                label="Signs"
                defaulvalue="no"
                value={signs ? "no" : "yes"}
                onChange={(e, { name, value }) => {
                  setsigns(!signs);
                  setValue(name, value);
                }}
                toggle
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              id="odometerStart"
              name="odometerStart"
              control={Input}
              label="Odometer Start"
              placeholder="Odometer Start"
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.odometerStart ? true : false}
            />
            <Form.Field
              id="odometerEnd"
              name="odometerEnd"
              control={Input}
              label="Odometer End"
              placeholder="Odometer End"
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.odometerEnd ? true : false}
            />
            <Form.Field
              id="personalUse"
              name="personalUse"
              control={Input}
              label="Personal Use"
              placeholder="Personal Use"
              onChange={(e, { name, value }) => {
                setValue(name, value);
              }}
            />
          </Form.Group>

          <Form.Group widths="equal">
            {/* <Form.Field>
              <TextArea
                id="generalComments"
                name="generalComments"
                placeholder="generalComments"
                label="General Comments"
                onChange={async (e, { name, value }) => {
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                placeholder="General Comments"
              />
            </Form.Field> */}

            <Form.Field
              id="generalComments"
              name="generalComments"
              control={TextArea}
              label="General Comments"
              placeholder="General Comments"
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.generalComments ? true : false}
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
        <ShowError />
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
        <Dimmer active={active} onClickOutside={handleClose} page>
          <Header as="h2" icon inverted>
            <Icon name="check circle outline" />
            Submitted!
            <Header.Subheader>
              Take-home assignment completed, Your data will be discarded.
              <pre>
                <b>Global State:</b> {JSON.stringify(state, null, 2)}
              </pre>
            </Header.Subheader>
          </Header>
        </Dimmer>
      </div>
    </Container>
  );
};

export default FormEnter;
