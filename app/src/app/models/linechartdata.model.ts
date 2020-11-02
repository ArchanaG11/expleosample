import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class linechartdata {
  @JsonProperty('data', String, true)
  public data: string = undefined;

  @JsonProperty('label', String, true)
  public label: string = undefined;

}