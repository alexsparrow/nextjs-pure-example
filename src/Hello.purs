module Hello where

import Prelude
import Effect (Effect)
import React.Basic.DOM as R
import React.Basic.Events (handler_)
import React.Basic.Hooks (ReactComponent, component, useState, (/\))
import React.Basic.Hooks as React

greeting :: String -> String
greeting name = "Hello from PureScript, " <> name <> "!"

mkCounter :: Effect (ReactComponent {})
mkCounter = do
  component "Counter" \props -> React.do
    counter /\ setCounter <- useState 0

    pure
      $ R.button
        { onClick: handler_ do
            setCounter (_ + 1)
        , children:
            [ R.text $ "Increment: " <> show counter ]
        }

counterC:: Effect React.JSX
counterC = do
  c <- mkCounter
  pure $ React.element c {}

foreign import setDocumentTitle :: String -> Effect Unit