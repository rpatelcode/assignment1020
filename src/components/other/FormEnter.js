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
  Grid,
  Header,
  Segment
} from "semantic-ui-react";
import useForm from "react-hook-form";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
// import FormEnter from "../../components/Form";
import _ from "lodash";
import "../../css/_datepicker.css";
import logo from "../../images/logo_city.gif";

const FormEnter = () => {
  useEffect(() => {
    register({ name: "vehicleNum" }, { required: true });
    register({ name: "date" }, { required: true });

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

    register({ name: "generalComments" });
    register({ name: "odometerStart" });
    register({ name: "odometerEnd" });
    register({ name: "personalUse" });
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

  const [focused, setFocused] = useState(false);

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
    console.log(data);
  };

  return (
    <Container>
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
              control={Input}
              label="vehicleNum"
              placeholder="vehicleNum"
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
              required
              error={errors.vehicleNum ? true : false}
            />

            <Form.Field required error={errors.proposedDate ? true : false}>
              <label>Intended Date of Marriage</label>
              <Icon name="calendar alternate outline" size="large" />
              <SingleDatePicker
                id="date"
                numberOfMonths={1}
                onDateChange={async date => {
                  let name = "date";
                  setValue(name, date);
                  await triggerValidation({ name });
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
                label="ownership"
                value={ownership ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setownership(!ownership);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="insurance"
                label="insurance"
                value={insurance ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setinsurance(!insurance);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="plateSticker"
                label="plateSticker"
                value={plateSticker ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setplateSticker(!plateSticker);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="firstAidKit"
                label="firstAidKit"
                value={firstAidKit ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setfirstAidKit(!firstAidKit);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                name="accidentForm"
                label="accidentForm"
                defaulvalue="no"
                value={accidentForm ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setaccidentForm(!accidentForm);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="exteriorBody"
                label="exteriorBody"
                defaulvalue="no"
                value={exteriorBody ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setexteriorBody(!exteriorBody);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="fluidLeaks"
                label="fluidLeaks"
                defaulvalue="no"
                value={fluidLeaks ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setfluidLeaks(!fluidLeaks);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="tireInflation"
                label="tireInflation"
                defaulvalue="no"
                value={tireInflation ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  settireInflation(!tireInflation);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                name="wheelsCondition"
                label="wheelsCondition"
                defaulvalue="no"
                value={wheelsCondition ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setwheelsCondition(!wheelsCondition);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="steering"
                label="steering"
                defaulvalue="no"
                value={steering ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setsteering(!steering);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="brake"
                label="brake"
                defaulvalue="no"
                value={brake ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setbrake(!brake);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="dashboardWarning"
                label="dashboardWarning"
                defaulvalue="no"
                value={tireInflation ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setdashboardWarning(!dashboardWarning);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                name="lights"
                label="lights"
                defaulvalue="no"
                value={lights ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setlights(!lights);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="signal"
                label="signal"
                defaulvalue="no"
                value={signal ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setsignal(!signal);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="mirrors"
                label="mirrors"
                defaulvalue="no"
                value={mirrors ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setmirrors(!mirrors);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="windshield"
                label="windshield"
                defaulvalue="no"
                value={windshield ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setwindshield(!windshield);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                name="wipers"
                label="wipers"
                defaulvalue="no"
                value={wipers ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setwipers(!wipers);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="defroster"
                label="defroster"
                defaulvalue="no"
                value={defroster ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setdefroster(!defroster);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="horn"
                label="horn"
                defaulvalue="no"
                value={horn ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  sethorn(!horn);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="backupAlarm"
                label="backupAlarm"
                defaulvalue="no"
                value={backupAlarm ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setbackupAlarm(!backupAlarm);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <Radio
                name="beacon"
                label="beacon"
                defaulvalue="no"
                value={beacon ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setbeacon(!beacon);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="tc12"
                label="tc12"
                defaulvalue="no"
                value={tc12 ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  settc12(!tc12);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="cones"
                label="cones"
                defaulvalue="no"
                value={cones ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setcones(!cones);
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                toggle
              />
            </Form.Field>
            <Form.Field>
              <Radio
                name="signs"
                label="signs"
                defaulvalue="no"
                value={backupAlarm ? "no" : "yes"}
                onChange={async (e, { name, value }) => {
                  setsigns(!signs);
                  setValue(name, value);
                  await triggerValidation({ name });
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
              label="odometerStart"
              placeholder="odometerStart"
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
            />
            <Form.Field
              id="odometerEnd"
              name="odometerEnd"
              control={Input}
              label="odometerEnd"
              placeholder="odometerEnd"
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
            />
            <Form.Field
              id="personalUse"
              name="personalUse"
              control={Input}
              label="personalUse"
              placeholder="personalUse"
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field>
              <TextArea
                id="generalComments"
                name="generalComments"
                label="generalComments"
                placeholder="generalComments"
                onChange={async (e, { name, value }) => {
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                placeholder="Tell us more"
              />
            </Form.Field>

            {/* <Form.Field
              id="generalComments"
              name="generalComments"
              control={Input}
              label="generalComments"
              placeholder="generalComments"
              onChange={async (e, { name, value }) => {
                setValue(name, value);
                await triggerValidation({ name });
              }}
            /> */}
          </Form.Group>

          <Button
            content="Next"
            icon="right arrow"
            labelPosition="right"
            primary
            disabled={
              !formState.dirty || (formState.dirty && !formState.isValid)
            }
          />
        </Form>
        <Message
          warning
          header="Could you check something!"
          list={[
            "That e-mail has been subscribed, but you have not yet clicked the verification link in your e-mail."
          ]}
        />
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
    </Container>
  );
};

export default FormEnter;
