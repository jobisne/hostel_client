import gql from "graphql-tag";

export const HOSTEL_REG = gql`
  mutation hostelReg(
    $hostelName: String!
    $hostelMaster: String!
    $hostelImage: Upload!
    $hostelDesc: String!
    $yearEstablish: String!
  ) {
    hostelReg(
      hostelInput: {
        hostelName: $hostelName
        hostelMaster: $hostelMaster
        hostelImage: $hostelImage
        hostelDesc: $hostelDesc
        yearEstablish: $yearEstablish
      }
    ) {
      id
      hostelName
      hostelMaster
      hostelImage
      hostelDesc
      yearEstablish
    }
  }
`;

export const FETCH_HOSTEL_QUERY = gql`
  {
    getHostels {
      id
      hostelName
      hostelMaster
      hostelImage
      hostelDesc
      yearEstablish
    }
  }
`;
export const REGISTER_USER = gql`
  mutation register(
    $masterName: String!
    $hostelName: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        masterName: $masterName
        hostelName: $hostelName
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      masterName
      hostelName
      token
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($hostelName: String!, $password: String!) {
    login(hostelName: $hostelName, password: $password) {
      id
      hostelName
      token
    }
  }
`;

export const FETCH_SINGLE_HOSTEL = gql`
query($postId: ID!){
    getHostel(postId: $postId) {
      id
      hostelName
      hostelMaster
      hostelImage
      hostelDesc
      yearEstablish
    }
  }
`;

export const STUDENT_REG = gql `
mutation student(
  $childname: String!
    $klass: String!
    $age: String!
    $sin: String!
    $gender: String!
    $state: String!
    $childstatus: String!
    $healthstatus: String!
    $hostelName: String!
    $quranStatus: String!
    $image: Upload!
    $relationshipone: String!
    $fname: String!
    $foccupation: String!
    $fphone: String!
    $faddress: String!
    $relationshiptwo: String!
    $sname: String!
    $soccupation: String!
    $sphone: String!
    $saddress: String!
    $iname: String!
    $iphone: String!
){
  student(
    studentInput:{
    childname: $childname
    klass: $klass
    age: $age
    sin: $sin
    gender: $gender
    state: $state
    childstatus: $childstatus
    healthstatus: $healthstatus
    hostelName: $hostelName
    quranStatus: $quranStatus
    image: $image
    relationshipone: $relationshipone
    fname: $fname
    foccupation: $foccupation
    fphone: $fphone
    faddress: $faddress
    relationshiptwo: $relationshiptwo
    sname: $sname
    soccupation: $soccupation
    sphone: $sphone
    saddress: $saddress
    iname: $iname
    iphone: $iphone
    }
    
  ) {
   id
    childname
    klass
    age
    sin
    gender
    state
    childstatus
    healthstatus
    hostelName
    quranStatus
    image
    relationshipone
    fname
    foccupation
    fphone
    faddress
    relationshiptwo
    sname
    soccupation
    sphone
    saddress
    iname
    iphone
    createdAt
  }
}

`
export const FETCH_STUDENTS_QUERY = gql`
query($postId: ID!){
  getStudents(postId: $postId){
    id
    childname
    klass
    age
    sin
    gender
    state
    childstatus
    healthstatus
    hostelName
    quranStatus
    image
    relationshipone
    fname
    foccupation
    fphone
    faddress
    relationshiptwo
    sname
    soccupation
    sphone
    saddress
    iname
    iphone
  }
}
`

export const FETCH_NUMBERS_OF_AETAM = gql`
query($postAetam: String!, $nameHostel: String!){
  getAetam(postAetam: $postAetam, nameHostel: $nameHostel){
   countAetam
  }
}
`
export const FETCH_NUMBERS_OF_NONAETAM = gql`
query($postNonAetam: String, $nameHostel: String){
  getNonAetam(postNonAetam: $postNonAetam, nameHostel: $nameHostel){
   countNonAetam
  }
}

`

export const  DELETE_STUDENT_MUTATION = gql`
mutation deleteStudent($postId: ID!){
  deleteStudent(postId: $postId)
}

`

export const FETCH_STUDENT_QUERY = gql`
query($postId: ID!){
  getStudent(postId: $postId){
    id
    childname
    klass
    age
    sin
    gender
    state
    childstatus
    healthstatus
    hostelName
    quranStatus
    image
    relationshipone
    fname
    foccupation
    fphone
    faddress
    relationshiptwo
    sname
    soccupation
    sphone
    saddress
    iname
    iphone
  }
}


`

export const EDIT_STUDENT_REG = gql `
mutation editStudent(
  $postId: String!
  $childname: String!
    $klass: String!
    $age: String!
    $sin: String!
    $gender: String!
    $state: String!
    $childstatus: String!
    $healthstatus: String!
    $hostelName: String!
    $quranStatus: String!
    $relationshipone: String!
    $fname: String!
    $foccupation: String!
    $fphone: String!
    $faddress: String!
    $relationshiptwo: String!
    $sname: String!
    $soccupation: String!
    $sphone: String!
    $saddress: String!
    $iname: String!
    $iphone: String!
){
  editStudent(
    editStudentInput:{
      postId: $postId
    childname: $childname
    klass: $klass
    age: $age
    sin: $sin
    gender: $gender
    state: $state
    childstatus: $childstatus
    healthstatus: $healthstatus
    hostelName: $hostelName
    quranStatus: $quranStatus
    relationshipone: $relationshipone
    fname: $fname
    foccupation: $foccupation
    fphone: $fphone
    faddress: $faddress
    relationshiptwo: $relationshiptwo
    sname: $sname
    soccupation: $soccupation
    sphone: $sphone
    saddress: $saddress
    iname: $iname
    iphone: $iphone
    }
    
  ) {
   id
    childname
    klass
    age
    sin
    gender
    state
    childstatus
    healthstatus
    hostelName
    quranStatus
    relationshipone
    fname
    foccupation
    fphone
    faddress
    relationshiptwo
    sname
    soccupation
    sphone
    saddress
    iname
    iphone
    createdAt
  }
}

`
export const SEARCH_STUDENT_MUTATION = gql`
mutation searchStudent($searchInput: String!){
  searchStudent(searchInput: $searchInput){
    id
    childname
    klass
    age
    sin
    gender
    state
    childstatus
    healthstatus
    hostelName
    quranStatus
    image
    relationshipone
    fname
    foccupation
    fphone
    faddress
    relationshiptwo
    sname
    soccupation
    sphone
    saddress
    iname
    iphone
  }
}

`
