import * as React from 'react';

import Card from './components/Card';
import cardAttrs from './cardAttrs';

import Button from './components/Button';
import { EButtonSize, EButtonColor, EButtonIcon } from './components/Button/types';

import TextInput from './components/TextInput';
import { ETextInputSize } from './components/TextInput/types';

import Select from './components/Select';
import { ESelectSize } from './components/Select/types';

import Checkbox from './components/Checkbox';

import Radio from './components/Radio';

const App: React.StatelessComponent<{}> = (props) => {
  return(
    <div className="app container">
      <div className="row">
        <div className="col-md-4">
          <h2>Card</h2>
          <Card {...cardAttrs} />
        </div>
        <div className="col-md-8">
          <div>
            <h2>Botões</h2>
            <div>
              <Button size={EButtonSize.Sm} tabIndex={0}>Btn Small</Button>
              <Button tabIndex={0}>Btn Default</Button>
              <Button size={EButtonSize.Lg} tabIndex={0}>Btn Larger</Button>
            </div>
            <div>
              <Button color={EButtonColor.Danger}>Btn Danger</Button>
              <Button color={EButtonColor.Outline}>Btn Outline</Button>
              <Button color={EButtonColor.Primary}>Btn Primary</Button>
              <Button color={EButtonColor.Gray}>Btn Gray</Button>
              <Button color={EButtonColor.LightGray}>Btn Light gray</Button>
            </div>
            <div>
              <Button
                isRound={true}
                icon={EButtonIcon.Star}
                color={EButtonColor.Danger}
              />
              <Button
                icon={EButtonIcon.Loading}
                color={EButtonColor.Primary}
              />
              <Button
                disabled
                icon={EButtonIcon.Loading}
                color={EButtonColor.Primary}
              />
              <Button href="/pipefy">Anchor Button</Button>
            </div>
            <hr/>
            <div>
              <h2>Input's</h2>
              <div className="row">
                <div className="col-md-6">
                  <TextInput
                    label="Text Input Label small"
                    description="Text Input Description"
                    inputSize={ETextInputSize.Xs}
                    placeholder="This Field is empty"
                    tabIndex={0}
                  />
                  <TextInput
                    label="Text Input Label default"
                    description="Text Input Description"
                    placeholder="This Field is empty"
                  />
                  <TextInput
                    label="Text Input Label larger"
                    description="Text Input Description"
                    inputSize={ETextInputSize.Lg}
                    placeholder="This Field is empty"
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    label="Text Input Label With Error"
                    description="Text Input Description"
                    inputSize={ETextInputSize.Lg}
                    placeholder="This Field is empty"
                    hasError={true}
                    errorMessage="Algo de errado não está certo"
                  />
                </div>
              </div>
            </div>
            <hr/>
            <div>
              <h2>Select</h2>
              <div className="row">
                <div className="col-md-6">
                  <Select
                    options={[{
                      text: 'Aqui um texto bacana',
                      value: 'foo',
                    }]}
                  />
                </div>
                <div className="col-md-6">
                  <Select
                    selectSize={ESelectSize.Xs}
                    value="bar"
                    options={[{
                      text: 'foo',
                      value: 'baz',
                    }, {
                      text: 'baz',
                      value: 'foo',
                    }, {
                      text: 'bar',
                      value: 'bar',
                    }]}
                  />
                </div>
              </div>
            </div>
            <hr/>
            <div>
              <h2>Input Checkbox | Radio</h2>
              <div className="row">
                <div className="col-md-6">
                  <Checkbox
                    checked={true}
                    id="foo"
                    label="Checkbox maneiro"
                  />
                  <Checkbox
                    disabled={true}
                    id="foo"
                    label="Checkbox maneiro - desabilitado"
                  />
                  <Checkbox
                    checked={true}
                    disabled={true}
                    id="foo"
                    label="Both"
                  />
                </div>
                <div className="col-md-6">
                  <Radio
                    checked={true}
                    id="foo"
                    label="Radio maneiro"
                  />
                  <Radio
                    disabled={true}
                    id="foo"
                    label="Radio maneiro - desabilitado"
                  />
                  <Radio
                    checked={true}
                    disabled={true}
                    id="foo"
                    label="Both"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
