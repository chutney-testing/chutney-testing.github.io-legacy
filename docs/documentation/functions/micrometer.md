Following functions help you work with Micrometer application monitoring facade.

!!! note "MeterRegistry micrometerRegistry(String registryClassName)"

    Retrieve an existing Micrometer registry by its class name.

    **Parameters** :

    * `registryClassName` : The searched Micrometer registry class name

    **Returns** : The searched registry or global registry if not found

    **Examples** :

    SpEL : `${#micrometerRegistry('CustomMeterRegistry')}`
